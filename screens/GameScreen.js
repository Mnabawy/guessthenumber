import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, Text, View, Button, Alert } from "react-native"
import _ from "lodash"
import NumberContainer from "../components/NumberContainer"
import Card from "../components/Card"

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.ceil(max)
  const randomNumber = _.random(min, max)
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  )
  const [rounds, setRounds] = useState(0)
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const { userChoice, onGameOver } = props

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert(`Don't lie!`, `You know that this is wrong...`, [
        { text: "sorry", style: "cancel" },
      ])
      return
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    setRounds(currentRounds => currentRounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Text>Oppont's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Lower"
            onPress={nextGuessHandler.bind(this, "lower")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Greater"
            onPress={nextGuessHandler.bind(this, "greater")}
          />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  button: {
    width:100
  }
})

export default GameScreen
