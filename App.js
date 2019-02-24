import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './Home'
import Second from './Second'
class App extends React.Component {
  render() {
    return (
     <Application/>
    );
  }
}

const Application = createStackNavigator({
  Home: { screen: Home},
  Profile:{ screen: Second}
  },{
    navigationOptions:{
      header:false,
    }
});

export default createAppContainer(Application);