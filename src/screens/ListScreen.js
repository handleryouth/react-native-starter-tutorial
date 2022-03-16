import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

/*
----Flatlist ELement----
-FlashList is a component that is used to show a list of items.
it turns an array into a list of elements.
-we are required to pass in "prop" of "data" - the array of data that we are goind to create a bunch of elements out of
-also required to pass in a "renderitem" prop - function that will turn each individual item into an element
-if you are coming from react on the web, you might be used to "maping" an array of data to build a list but in here, FlastList is better with RN

*/

function ListScreen() {
  // key has to be string and unique
  //you can provider the key right to the array
  // { name: "Friend #1", key: "1" },
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 32 },
    { name: "Friend 4", age: 27 },
    { name: "Friend 5", age: 53 },
    { name: "Friend 7", age: 30 },
  ];

  return (
    <FlatList
      /*
    by telling horizontal in flatlist, 
    we can make the list scroll horizontally
    */
      showsHorizontalScrollIndicator={false}
      data={friends}
      //you can use properties as key using keyExtractor
      keyExtractor={(friend) => friend.name}
      /*
        element will contain this prop :
        item - the data of the item that we are currently rendering
        index - the index of the item that we are currently rendering
      */
      /*
        key is used by react anative to track different objects we are passing in to try to render.

     */
      renderItem={({ item }) => (
        <Text>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default ListScreen;
