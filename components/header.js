import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import color from "../constant/color";

const Headers = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
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
  },
  headerIos: {
    backgroundColor: "#f5f6fa",
    borderBottomWidth: 1,
    borderBottomColor: color.colorBackground,
  },
  headerAndroid: {
    backgroundColor: color.colorBackground,
  },
  headerTitle: {
    fontSize: 24,
    color: Platform.OS === "ios" ? color.colorBackground : "#f5f6fa",
    paddingTop: 30,
    letterSpacing: 0.5,
    fontWeight: "normal",
  },
});
