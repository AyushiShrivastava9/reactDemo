import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home'

const AppContainer = createAppContainer(AppNavigator);
const AppNavigator = createStackNavigator({
    Home: {
      screen: Home
    },
  });

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}