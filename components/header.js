import React from "react";
import { StyleSheet, View, Text } from "react-native";
import color from "../constant/color";

const Headers = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.colorBackground,
  },
  headerTitle: {
    fontSize: 24,
    color: "#f5f6fa",
    paddingTop: 30,
    letterSpacing: 0.5,
    fontWeight: "normal",
  },
});
