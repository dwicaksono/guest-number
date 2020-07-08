import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
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

const listItem = (listLeng, itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText style={{ color: "white" }}>
        #{listLeng - itemData.index}
      </BodyText>
      <BodyText style={{ color: "white" }}>{itemData.item}</BodyText>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = randomNumberGenerate(1, 100, props.userChoice);
  const [currentGues, setcurrentGues] = useState(initialGuess);

  const [rounds, setRound] = useState([initialGuess.toString()]);

  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  const currentLower = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

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
    setRound((currentRound) => [nextNumber.toString(), ...currentRound]);
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
        {/* <ScrollView contentContainerStyle={styles.listScroll}>
          {rounds.map((item, idx) => listItem(item, rounds.length - idx))}
        </ScrollView> */}
        <FlatList
          data={rounds}
          renderItem={listItem.bind(this, rounds.length)}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listScroll}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 2,
    maxWidth: "80%",
    width: 300,
  },
  listContainer: {
    height: "50%",
    flex: 1,
  },
  listScroll: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  listItem: {
    width: "80%",
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.colorBackground,
    padding: 15,
    borderRadius: 10,
  },
});
