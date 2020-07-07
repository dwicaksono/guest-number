import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

import color from "../constant/color";
import BodyText from "../components/bodyText";
import MainButton from "../components/mainButtonStyle";

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
      <BodyText>
        Your phone needed{" "}
        <Text style={styles.highligt}> {props.roundsNumber} </Text>round to
        guess number <Text style={styles.highligt}>{props.userNumber}</Text>
      </BodyText>

      <View style={styles.buttonStyle}>
        <MainButton style={{ borderRadius: 10 }} onPress={props.onNewStart}>
          start new game
        </MainButton>
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
  highligt: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
