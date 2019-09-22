//import {createAppContainer} from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Home from '../components/Home';
import WishlistVideo from '../components/WishlistVideo';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const AppNavigator = createStackNavigator(
//   {
//   Home: Home,
//   WishlistVideo: WishlistVideo,
// },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);