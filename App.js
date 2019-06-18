/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './src/authScreen/login/Login';
import SignUp from './src/authScreen/SignUp'
import ForgotPassword from './src/authScreen/forgotPassword/ForgotPassword';
//import TabNavigator from './src/navigation/tabNavigation/TabNavigator';
import DrawerNavigator from './src/navigation/drawerNavigation/DrawerNavigator';
import DrawerScreen1 from './src/screens/drawerScreen/DrawerScreen1'
import loading from './src/screens/tabscreen/loading'

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({  
  Login:{
    screen:Login
  },
  
  SignUp:{
    screen:SignUp
  },
  
  // TabNav:{
  //   screen:TabNavigator
  // },

  DrewerNav:{
    screen:DrawerNavigator
},

 Disnav:{
   screen:DrawerScreen1
 },
 SigntoLogin:{
   screen:Login
 },
 loading:{
  screen:loading
},
 

},
    navigationOptions={
      headerMode:'none'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    
  },
});
