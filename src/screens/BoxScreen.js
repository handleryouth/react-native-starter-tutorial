import React from "react";
import { View, Text, StyleSheet } from "react-native";

/*
----Box Object Modal----
Box Object Model is a rectangle with four sides (just like you see in devtools).
Box Object models consist of content, padding, border, and margin.

example shortcut for Box Object Model :

margin : set the margin on all sides
marginVertical : set the margin on top and bottom
marginHorizontal : set the margin on left and right
padding: set the padding on all sides
paddingVertical: set the padding on top and bottom
paddingHorizontal: set the padding on left and right
borderWidth: Set border width on all sides




---Flex -----
alignItems(default is stretch)
- stretch: stretch the child to fill the available space
- flex-start: align the child to the start of the container
- flex-end: align the child to the end of the container
- center: align the child to the center of the container

flexdirection (default is column)
- row: arrange children in a row
- column: arrange children in a column

justifyContent(default to flex-start)
- flex-start: align children to the start of the container
- flex-end: align children to the end of the container
- center: align children to the center of the container

values that apply to parent are alignItems, justifyContent, and flexdirection

values that apply to child are flex (looks like flex-basis/flex-grow in css), alignSelf 

example of flex (for child):
  textOneStyles: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
  },
  textTwoStyles: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
  },
  textThreeStyles: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },


---- alignSelf(for child) -----
allows you to specify how a child should align itself within its parent
- alignSelf: "flex-end"
- alignSelf: "center"
- alignSelf: "flex-start"


--- postion ---
just like css
- absolute: position the child absolutely
- relative: position the child relatively

--- top bottom left right ---
just like css


---...styleSheet.absoluteFillObject ---
means that
- the position is absolute
- top, left, bottom, right have zero value




*/

const BoxScreen = () => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textOneStyles}>Child #1</Text>
      <Text style={styles.textTwoStyles}>Child #2</Text>
      <Text style={styles.textThreeStyles}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyles: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyles: {
    borderWidth: 3,
    borderColor: "red",

    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyles: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
