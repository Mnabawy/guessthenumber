import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

export default function Input(props) {
  return (
    <View style={styles.contianer}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput {...props} style={{ ...props.style, ...styles.input }} />
    </View>
  )
}

const styles = StyleSheet.create({
  contianer: {
    alignItems: "center",
  },
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  text: {
    fontFamily: "open-sans",
  },
})
