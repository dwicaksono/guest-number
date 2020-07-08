import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import color from "../constant/color";
// import color from "../constant/color";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.textButton}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: color.colorBackground,
  },
  textButton: {
    fontFamily: "open-sans",
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});
