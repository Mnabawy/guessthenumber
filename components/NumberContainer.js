import React from "react"
import { View, Text, StyleSheet } from "react-native"
import colors from "../constants/colors"

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width:50
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    
  },
})
