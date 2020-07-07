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
import BodyText from "../components/bodyText";
import TextTitle from "../components/titleText";
import MainButton from "../components/mainButtonStyle";

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
        <BodyText style={styles.numberCardtitle}>You Selected</BodyText>
        <NumberContainer>{selectNumber}</NumberContainer>
        <MainButton
          style={{ borderRadius: 10 }}
          onPress={() => props.onStartGame(selectNumber)}
        >
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TextTitle style={styles.title}>Start a New Game !</TextTitle>
        <Card style={styles.inputContainer}>
          <BodyText>Select Number</BodyText>
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
            <MainButton style={{ borderRadius: 10 }} onPress={resetHandler}>
              reset
            </MainButton>
            <MainButton style={{ borderRadius: 10 }} onPress={confirmHandler}>
              confirm
            </MainButton>
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
