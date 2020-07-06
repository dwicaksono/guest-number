import React from "react";
import { View, StyleSheet, Text } from "react-native";

import color from "../constant/color";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberCount}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: color.colorBackground,
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    width: 100,
    marginVertical: 10,
  },
  numberCount: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
