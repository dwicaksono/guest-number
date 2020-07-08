import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
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
    backgroundColor:
      Platform.OS === "android" ? color.colorBackground : "#f5f6fa",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    borderBottomColor: Platform.OS === "ios" ? color.colorBackground : null,
  },
  headerTitle: {
    fontSize: 24,
    color: Platform.OS === "ios" ? color.colorBackground : "#f5f6fa",
    paddingTop: 30,
    letterSpacing: 0.5,
    fontWeight: "normal",
  },
});
