import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").height * 0.7) / 2,
    borderWidth: 5,
    overflow: "hidden",
    borderColor: color.colorBackground,
    marginVertical: Dimensions.get("window").height / 30,
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
