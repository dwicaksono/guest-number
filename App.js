import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import GameStartScreen from "./screens/gameStartScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="TEBAK ANGKA" />
      <GameStartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
