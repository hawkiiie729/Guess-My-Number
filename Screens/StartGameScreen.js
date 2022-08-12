import React, { useState } from "react";
import { TextInput, View, Pressable, StyleSheet, Alert ,Text} from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";
import PrimaryButton from "../Components/Ui/PrimaryButton"
import Title from "../Components/Ui/Title";
import Colors from "../Constants/Color";

const styles = StyleSheet.create({
  rootContainer:{
   flex:1,
   marginTop:100,
   alignItems:'center'
  },
 
  numInput: {
    height: 50,
    width: 50,
    // flexDirection: "row",
    // justifyContent: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    // marginHorizontal: 115,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    marginHorizontal: 6,
  },
});

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputTextHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert("Invalid Number", "Number has to be between 0 to 100", [
        { text: "okay", style: "destructive", onPress:resetInputHandler },
      ]);
      return;
    }
    // console.log('Valid Number');
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>
     <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        onChangeText={inputTextHandler}
        value={enteredNumber}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
