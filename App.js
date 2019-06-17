/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

//External Libraries
import { createStackNavigator, createAppContainer } from 'react-navigation';

import DetailsScreen from "./Components/DetailsScreen"
import FirstScreen from "./Components/FirstScreen"




const nav = createStackNavigator(
  {
    First: FirstScreen,
    Details: DetailsScreen
  }, {
    initialRouteName: 'First',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7a5901',
        title: 'Testing'
      },
    }
  },
)

const AppContainer = createAppContainer(nav);


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}


