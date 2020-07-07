import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../constant/color";

import NumberContainer from "../components/numberContainer";
import Card from "../components/card";
import MainButton from "../components/mainButtonStyle";
import BodyText from "../components/bodyText";

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

const listItem = (value, idx) => {
  return (
    <View key={idx} style={styles.listItem}>
      <BodyText style={{ color: "white" }}>#{idx}</BodyText>
      <BodyText style={{ color: "white" }}>{value}</BodyText>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = randomNumberGenerate(1, 100, props.userChoice);
  const [currentGues, setcurrentGues] = useState(initialGuess);

  const [rounds, setRound] = useState([initialGuess]);

  const currentLower = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGues === userChoice) {
      onGameOver(rounds.length);
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
      currentLower.current = currentGues + 1;
    }
    const nextNumber = randomNumberGenerate(
      currentLower.current,
      currentHigh.current,
      currentGues
    );
    setcurrentGues(nextNumber);
    setRound((currentRound) => [nextNumber, ...currentRound]);
  };

  return (
    <View style={styles.screen}>
      <Text>opponent's guess</Text>
      <NumberContainer>{currentGues}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          style={{ borderRadius: 10 }}
          onPress={nextHandlereGues.bind(this, "lower")}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton
          style={{ borderRadius: 10 }}
          onPress={nextHandlereGues.bind(this, "greater")}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView>
          {rounds.map((item, idx) => listItem(item, rounds.length - idx))}
        </ScrollView>
      </View>
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
  listContainer: {
    width: "80%",
    height: "50%",
    marginVertical: 10,
  },
  listItem: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.colorBackground,
    padding: 15,
    borderRadius: 10,
  },
});
