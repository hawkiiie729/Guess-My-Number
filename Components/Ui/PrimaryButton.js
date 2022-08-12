import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../Constants/Color";

const styles = StyleSheet.create({
  btnOuterContainer: {
    width:100,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.75
  }
});

const PrimaryButton = ({ children,onPress }) => {
  

  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({pressed})=>
        pressed?[styles.btnInnerContainer,styles.pressed]  :styles.btnInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
