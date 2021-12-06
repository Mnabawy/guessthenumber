import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over! </Text>
      <Text>Number of Rounds: {props.roundsNumer}</Text>
      <Text>Number Was: {props.userNumber}</Text>
      <View style={styles.button}>
        <Button title="New Game" onPress={props.onRestart} />
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    width: 100,
  },
})
