import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  HomeScreen,
  SquareScreen,
  ColorScreen,
  CounterScreen,
  ComponentScreen,
  ListScreen,
  ImageScreen,
  TextScreen,
  BoxScreen,
} from "./src";

/*
Create stack navigator is a function that takes in a configuration object.
stack navigator will decide which screen to show based on the route name.
*/

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    /*
    initial routename means which screen to show when the app starts.
    */
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
