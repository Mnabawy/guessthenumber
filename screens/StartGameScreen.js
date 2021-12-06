import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native"
import Card from "../components/Card"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"
import colors from "../constants/colors"

const StartGameScreen = props => {
  const [enterdValue, setValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const numberInputHandler = inputText => {
    setValue(inputText.replace(/[^0-9]/g, ""))
  }

  const resetInputHandler = () => {
    setValue("")
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumer = parseInt(enterdValue)
    if (isNaN(chosenNumer) || chosenNumer <= 0 || chosenNumer > 99) {
      Alert.alert(
        "Invalid number!",
        "Input Has to be a Number Between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      )
      return
    }

    setConfirmed(true)
    setSelectedNumber(parseInt(chosenNumer))
    setValue("")
  }

  let confirmedOuput

  if (confirmed) {
    confirmedOuput = (
      <Card style={styles.sumContainer}>
        <Text style={styles.number}> chosen number </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <View style={styles.selectedNumber}>
          <Button
            title="Start the Game"
            color={colors.secondary}
            onPress={() => props.onStartGame(selectedNumber)}
          />
        </View>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContianer}>
          <Input
            title="Select a Number"
            style={styles.input}
            blurOnSubm
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enterdValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.primary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.secondary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOuput}
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  inputContianer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'open-sans-bold'
  },
  button: {
    width: 100,
  },
  input: { width: 50, textAlign: "center" },
  sumContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  number: {
    fontSize: 18,
  },
  selectedNumber: {
    marginTop: 5,
  },
})

export default StartGameScreen
