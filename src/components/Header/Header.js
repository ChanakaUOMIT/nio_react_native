import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  // Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right
} from "native-base";
// import DrawerNavigation from '../../navigations/DrawerNavigation';
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon_Ionicons from "react-native-vector-icons/Ionicons";
import Icon_Entypo from "react-native-vector-icons/Entypo";

class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    const {
      title,
      openDrawer,
      iconName,
      leftPress,
      type,
      iconNameRight,
      add,
      addParticipant,
      sub
    } = this.props;

    const rightIcon =
      type === "sub" ? (
        <Icon_Ionicons name="ios-arrow-back" size={25} color="white" />
      ) : (
        <Button transparent onPress={openDrawer}>
          <Icon name="bars" size={25} color="white" />
        </Button>
      );

    const leftIcon =
      add === "participant" ? (
        <Icon_Ionicons
          onPress={addParticipant}
          name="ios-add"
          size={25}
          color="white"
        />
      ) : (
        <Icon
          // name="md-notifications"
          onPress={leftPress}
          name={iconName}
          style={{ fontSize: 23, color: "#ffffff" }}
        />
      );

    return (
      <View>
        <Header
          style={{ backgroundColor: "#6D0F49" }}
          androidStatusBarColor={"#6D0F49"}
        >
          <Left>{rightIcon}</Left>
          <Body>
            <Title style={{ textAlign: "center" }}>{title}</Title>
          </Body>
          <Right>{leftIcon}</Right>
        </Header>
      </View>
    );
  }
}

export default CustomHeader;

CustomHeader.propsTypes = {
  title: PropTypes.string,
  openDrawer: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  leftPress: PropTypes.func,
  type: PropTypes.string,
  iconNameRight: PropTypes.string,
  addParticipant: PropTypes.func,
  sub: PropTypes.string,
  openDotMenu: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerCenter: {
    textAlign: "center"
  }
});
