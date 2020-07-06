import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import GameStartScreen from "./screens/gameStartScreen";
import GameScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOver";

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [roundNumber, setroundNumber] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
    setroundNumber(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setroundNumber(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setroundNumber(0);
    setuserNumber(null);
  };

  let content = (
    <GameStartScreen
      onStartGame={startGameHandler}
      onGameOver={gameOverHandler}
    />
  );

  if (userNumber && roundNumber <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (roundNumber > 0) {
    content = (
      <GameOverScreen
        roundsNumber={roundNumber}
        userNumber={userNumber}
        onNewStart={startNewGameHandler}
      />
    );
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
