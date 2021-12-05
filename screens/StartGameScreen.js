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
} from "react-native"
import Card from "../components/Card"
import Input from "../components/Input"
import colors from "../constants/colors"

const StartGameScreen = props => {
  const [value, setValue] = useState("")

  const numberInputHandler = inputText => {
    setValue(inputText.replace(/[^0-9]/g, ""))
  }

  const resetInputHandler = () => {
    setValue("")
  }

  const confirmInputHandler = () => {
    Alert.alert(value)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContianer}>
          <Input
            title="Select a Number"
            style={styles.input}
            blurOnSubm
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={value}
            onChangeText={numberInputHandler}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                color={colors.primary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                color={colors.secondary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
      </View>
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
  },
  btn: {
    width: 100,
  },
  input: { width: 50, textAlign: "center" },
})

export default StartGameScreen
