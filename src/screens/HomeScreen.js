import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/*
---Button---
very simple component for showing a button and detecting a press

---TouchableOpacity---
highly customizeable component that can detect a press on just about any kind of element

*/

const HomeScreen = ({ navigation }) => {
  /*
  stacknavigation has given every component a props that you can access
  */

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate("List")}
      />

      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to text demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box demo"
        onPress={() => navigation.navigate("Box")}
      />
      {/* TouchableOpacity will make your component kinda fadeout a litte while
      when you click it */}
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
