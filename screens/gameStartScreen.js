import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from "react-native";
import color from "../constant/color";
import Card from "../components/card";
import Input from "../components/input";
import NumberContainer from "../components/numberContainer";

const GameStartScreen = (props) => {
  const [enteredValue, setenteredValue] = useState("");
  const numberTexInputHandler = (texInputNumber) => {
    setenteredValue(texInputNumber.replace(/[^0-9]/g, ""));
  };
  const [selectNumber, setSelectNumber] = useState();
  const [confirmed, setconfirmed] = useState(true);

  const resetHandler = () => {
    setenteredValue("");
    setconfirmed(false);
  };

  const confirmHandler = () => {
    const confirmNumber = parseInt(enteredValue);
    if (isNaN(confirmNumber) || confirmNumber <= 0 || confirmNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a Number between 1 - 99",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    setconfirmed(true);
    setenteredValue("");
    setSelectNumber(confirmNumber);
    Keyboard.dismiss();
  };
  let infoNumberInput;
  if (confirmed) {
    infoNumberInput = (
      <Card style={styles.numberCard}>
        <Text style={styles.numberCardtitle}>You Selected</Text>
        <NumberContainer>{selectNumber}</NumberContainer>
        <Button
          title="START GAME"
          color={color.colorBackground}
          onPress={() => props.onStartGame(selectNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game !</Text>
        <Card style={styles.inputContainer}>
          <Text>Select Number</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            blurOnSubmit
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={2}
            onChangeText={numberTexInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="reset"
              onPress={resetHandler}
              color={color.colorBackground}
            />
            <Button
              title="confirm"
              onPress={confirmHandler}
              color={color.colorBackground}
            />
          </View>
        </Card>
        {infoNumberInput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: 400,
    maxWidth: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: Dimensions.get("window").height > 600 ? 20 : 2,
  },
  input: {
    width: 50,
    textAlign: "center",
  },

  numberCard: {
    width: 200,
    maxWidth: "50%",
    marginVertical: 25,
    alignItems: "center",
  },
});
