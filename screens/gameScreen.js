import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import color from "../constant/color";

import NumberContainer from "../components/numberContainer";
import Card from "../components/card";

const randomNumberGenerate = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randoNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randoNumber === exclude) {
    return randomNumberGenerate(min, max, exclude);
  } else {
    return randoNumber;
  }
};

const GameScreen = (props) => {
  const [currentGues, setcurrentGues] = useState(
    randomNumberGenerate(1, 100, props.userChoice)
  );

  const [round, setRound] = useState(0);

  const currentLower = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGues === userChoice) {
      onGameOver(round);
    }
  }, [currentGues, currentGues, userChoice]);

  const nextHandlereGues = (direction) => {
    if (
      (direction === "lower" && currentGues < userChoice) ||
      (direction === "greater" && currentGues > userChoice)
    ) {
      Alert.alert("Don't lie", "You know that wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGues;
    } else {
      currentLower.current = currentGues;
    }
    const nextNumber = randomNumberGenerate(
      currentLower.current,
      currentHigh.current,
      currentGues
    );
    setcurrentGues(nextNumber);
    setRound((currentRound) => currentRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>opponent's guess</Text>
      <NumberContainer>{currentGues}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Lower"
          onPress={nextHandlereGues.bind(this, "lower")}
          color={color.colorBackground}
        />
        <Button
          title="Greater"
          onPress={nextHandlereGues.bind(this, "greater")}
          color={color.colorBackground}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    maxWidth: "80%",
    width: 300,
  },
});
