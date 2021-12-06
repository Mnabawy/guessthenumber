import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import AppLoading from 'expo-app-loading';

import Header from "./components/Header"
import GameOverScreen from "./screens/GameOverScreen"
import GameScreen from "./screens/GameScreen"
import StartGameScreen from "./screens/StartGameScreen"
import * as Font from "expo-font"

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumer={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
