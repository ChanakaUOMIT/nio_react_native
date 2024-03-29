import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconOcticons from "react-native-vector-icons/Octicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
//import TabNavigator from '../tabNavigation/TabNavigator'
import DrawerScreen1 from "../../screens/drawerScreen/DrawerScreen1";
import DrawerScreen2 from "../../screens/drawerScreen/DrawerScreen2";
import DrawerScreen3 from "../../screens/drawerScreen/DrawerScreen3";
//import TabScreen1 from '../../screens/tabscreen/TabScreen1';
import home from "../../screens/tabscreen/home";
import userAccount from "../../authScreen/login/userAccount";
// import CreateDiscussion from "";
// import { Right } from 'native-base';
import CreateDiscussion from "./../../screens/discussion/createDiscussion";
import Logout from "./../../authScreen/logout/logout";

const CustomDrawerComponent = props => (
  <SafeAreaView>
    <View
      style={{
        height: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../../Images/user.jpg")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default createDrawerNavigator(
  {
    Home: {
      screen: home,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />
      }
    },

    DrawerScreen1: {
      screen: DrawerScreen1,
      navigationOptions: {
        drawerLabel: "Discussion",
        drawerIcon: ({ tintColor }) => (
          <IconOcticons name="comment-discussion" size={17} />
        )
      }
    },

    DrawerScreen2: {
      screen: DrawerScreen2,
      navigationOptions: {
        drawerLabel: "News Feed",
        drawerIcon: ({ tintColor }) => <Icon name="newspaper" size={17} />
      }
    },

    DrawerScreen3: {
      screen: DrawerScreen3,
      navigationOptions: {
        drawerLabel: "Task Feed",
        drawerIcon: ({ tintColor }) => <Icon name="heart" size={17} />
      }
    },
    DrawerScreen4: {
      screen: userAccount,
      navigationOptions: {
        drawerLabel: "userAccount",
        drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />
      }
    },
    DrawerScreen5: {
      screen: Logout,
      navigationOptions: {
        drawerLabel: "Logout",
        drawerIcon: ({ tintColor }) => <IconAntDesign name="logout" size={17} />
      }
    }
  },
  {
    drawerPosition: "left",
    contentComponent: CustomDrawerComponent
  }
);
