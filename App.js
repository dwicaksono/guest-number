import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import GameStartScreen from "./screens/gameStartScreen";
import GameScreen from "./screens/gameScreen";
export default function App() {
  const [userNumber, setuserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
  };

  let content;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  } else {
    content = <GameStartScreen onStartGame={startGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="TEBAK ANGKA" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
