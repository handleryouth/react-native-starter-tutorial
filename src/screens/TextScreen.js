import React, { useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const errorMessage = useRef("");

  const handleInputValueVerification = useCallback((value) => {
    if (name.length < 5) {
      errorMessage.current = "Name must be at least 5 characters";
    } else {
      errorMessage.current = "";
    }
    setName(value);
  });

  return (
    <View>
      <Text>Enter name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => handleInputValueVerification(text)}
      />
      <Text>{errorMessage.current}</Text>

      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
