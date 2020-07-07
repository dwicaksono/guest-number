import React from "react";
import { StyleSheet, Text } from "react-native";

const TextTitle = (props) => (
  <Text style={{ ...styles.titleText, ...props.style }}>{props.children}</Text>
);

export default TextTitle;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
