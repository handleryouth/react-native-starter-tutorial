import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function CounterScreen() {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement" })}
      />
      <Text>Current Counter : {state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
