import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2.62,
    shadowOpacity: 0.23,
    elevation: 4,
    backgroundColor: "white",
    padding: 30,
    borderRadius: 15,
  },
});
