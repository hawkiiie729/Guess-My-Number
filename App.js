import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import Colors from "./Constants/Color";
import GameOverScreen from "./Screens/GameOverScreen";
import {useFonts} from 'expo-font'
import AppLoading from "expo-app-loading"; 


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds,setGuessRounds]=useState(0);

  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf'),
    
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  };

  const gameOverHandler=(numberOfRounds)=>{
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGameHandler=()=>{
    setUserNumber(null);
    setGuessRounds(0);
  }

 
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

if(gameIsOver===true && userNumber){
  screen=<GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
}


  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/bgimg.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
