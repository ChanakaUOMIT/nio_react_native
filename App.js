/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./src/authScreen/login/Login";
import SignUp from "./src/authScreen/SignUp";
import ForgotPassword from "./src/authScreen/forgotPassword/ForgotPassword";
//import TabNavigator from './src/navigation/tabNavigation/TabNavigator';
import DrawerNavigator from "./src/navigation/drawerNavigation/DrawerNavigator";
import DrawerScreen1 from "./src/screens/drawerScreen/DrawerScreen1";
import loading from "./src/screens/tabscreen/loading";
// import Discussion from "./src/screens/discussion/discussion";
import createDiscussion from "./src/screens/discussion/createDiscussion";
import CreateDiscussion from "./src/screens/discussion/createDiscussion";
import WhatIsDiscussion from "./src/screens/discussion/whatIsDiscussion/whatIsDiscussion";
import DiscussionParticipantList from "./src/screens/discussion/discussionParticipantList";
import Discussion from "./src/screens/discussion/discussion";
import ModifyDiscussion from "./src/screens/discussion/modifyDiscussion";

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    // Discussion: {
    //   screen: Discussion
    // },

    // createDiscussion: {
    //   screen: CreateDiscussion
    // },

    Login: {
      screen: Login
    },

    SignUp: {
      screen: SignUp
    },

    // TabNav:{
    //   screen:TabNavigator
    // },

    DrewerNav: {
      screen: DrawerNavigator
    },

    Disnav: {
      screen: DrawerScreen1
    },
    SigntoLogin: {
      screen: Login
    },
    loading: {
      screen: loading
    },
    createDiscussion: {
      screen: createDiscussion
    },

    ModifyDiscussion: {
      screen: ModifyDiscussion
    },
    DiscussionParticipantList: {
      screen: DiscussionParticipantList
    },
    WhatIsDiscussion: {
      screen: WhatIsDiscussion
    },
    Discussion: {
      screen: Discussion
    }

    // WhatIsDiscussion: {
    //   screen: WhatIsDiscussion
    // }
  },
  (navigationOptions = {
    headerMode: "none"
  })
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#333333"
  }
});
