import React from "react";
import { Text, StyleSheet, View } from "react-native";

/*
what is "Text" in react-native?
answer: A "primitive" React Element. used to show some basic content on the screen.

what's that "appNavigator" in App.js?
answer: it's a variable that holds the navigator that we created in App.js.
it is used to show different screens to the user.

How's that "styles" thing work ?
answer: a function validates a set of styling rules that we pass into it. 
we can use it or pass styling directly into an element
*/

/*
View is a component that is used to group other components together. (like a div in html)

Text is a component that is used to show some text on the screen. (like a p in html)


*/

export default function ComponentScreen() {
  const name = "Tony";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subTextStyle}>Hello my name {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subTextStyle: {
    fontSize: 20,
  },
});
