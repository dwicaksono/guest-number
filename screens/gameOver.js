import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import color from "../constant/color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over !!!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require("../assets/img/success.png")}
          source={{
            uri:
              "https://www.pegipegi.com/travel/wp-content/uploads/2019/03/1-9.jpg",
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <View style={styles.buttonStyle}>
        <Button
          color={color.colorBackground}
          title="start new game"
          onPress={props.onNewStart}
        />
      </View>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    marginVertical: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    overflow: "hidden",
    borderColor: color.colorBackground,
    marginVertical: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
