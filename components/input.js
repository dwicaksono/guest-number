import React from "react";
import { StyleSheet, TextInput } from "react-native";
import color from "../constant/color";

const Input = (props) => {
  // urutannnya harus seperti ini jika ada tambahan ...props
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor: color.colorBackground,
    marginVertical: 10,
  },
});
