import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ViewBase, Alert } from "react-native";
import NumberContainer from "../Components/Game/NumberContainer";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";
import PrimaryButton from "../Components/Ui/PrimaryButton";
import Title from "../Components/Ui/Title";
import {Ionicons} from '@expo/vector-icons'

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    //direction=>'lower,'higher'

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie!", "You know that you cheated....", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText> Lower OR Higher??</InstructionText>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={23.6} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View>{/* log rounds */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 28,
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
  }
});

export default GameScreen;
