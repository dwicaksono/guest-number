import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import color from "../constant/color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over !!!</Text>
      <Text>Number of Rounds : {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <View style={styles.buttonStyle}>
        <Button
          color={color.colorBackground}
          title="start new game"
          onPress={props.onNewStart}
        />
      </View>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    marginVertical: 20,
  },
});
