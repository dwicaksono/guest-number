import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import color from "../constant/color";
import Card from "../components/card";
import Input from "../components/input";
const GameStartScreen = (props) => {
  return (
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
        />
        <View style={styles.buttonContainer}>
          <Button
            title="reset"
            onPress={() => {}}
            color={color.colorBackground}
          />
          <Button title="confirm" color={color.colorBackground} />
        </View>
      </Card>
    </View>
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
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});
