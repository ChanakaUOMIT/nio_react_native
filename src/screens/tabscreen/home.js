import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { Container, Content, CardItem, Right, Card, Button } from "native-base";
import { ThemeProvider, Header } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import Swiper from "react-native-swiper";

import CustomHeader from "../../components/Header/Header";

class home extends Component {
  constructor(props) {
    super(props);
  }
  loadingHandler = () => {
    this.props.navigation.navigate(loading);
  };
  DisHandler = () => {
    this.props.navigation.navigate("Disnav");
  };
  render() {
    return (
      <ScrollView>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#9F035C", "#6D0F49"]}
          style={styles.linearGradient}
        >
          <View>
            <View>
              <CustomHeader
                title="Welcome to NIO"
                openDrawer={() => this.props.navigation.openDrawer()}
              />
            </View>
            <View>
              <View
                style={styles.discusscontainer}
                onPress={() => alert("Clicked")}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={styles.leftlay}>
                    <View style={styles.iconpos}>
                      <Icon name="microphone-alt" size={50} color="#9F035C" />
                      <Text style={styles.Distext}>Disccusion</Text>
                    </View>
                  </View>
                  <View style={styles.rightlay}>
                    <View style={styles.iconpos1}>
                      <Card style={styles.containerstyle}>
                        <CardItem style={styles.containerstyle1}>
                          <TouchableOpacity>
                            <Text>Discussion 1</Text>
                          </TouchableOpacity>
                          <Right>
                            <Icon name="angle-right" />
                          </Right>
                        </CardItem>
                      </Card>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.wrapper}>
                <View style={styles.discusscontainer}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={styles.leftlay}>
                      <View style={styles.iconpos}>
                        <Icon name="tasks" size={50} color="#9F035C" />
                        <Text style={styles.Distext}>Task</Text>
                      </View>
                    </View>
                    <View style={styles.rightlay1}>
                      <View style={styles.iconpos1}>
                        <Card style={styles.containerstyle}>
                          <CardItem style={styles.containerstyle1}>
                            <TouchableOpacity>
                              <Text>Discussion 2</Text>
                            </TouchableOpacity>
                            <Right>
                              <Icon name="angle-right" />
                            </Right>
                          </CardItem>
                        </Card>
                      </View>
                    </View>
                    <View style={styles.rightlay2}>
                      <View style={styles.iconpos0}>
                        <Icon
                          name="calendar-alt"
                          size={55}
                          color="#9F035C"
                          alignItems="center"
                        />
                        <Text style={{ fontSize: 12, textAlign: "center" }}>
                          {" "}
                          check here
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.wrapper1}>
              <TouchableOpacity>
                <Button style={styles.btnLogin1}>
                  <Icon
                    name="newspaper"
                    size={25}
                    color="white"
                    alignItems="center"
                  />
                  <Text style={styles.text}>Report Your News </Text>
                </Button>
              </TouchableOpacity>
            </View>
            <View style={styles.Swipercon}>
              <Swiper style={styles.wrapper2} showsButtons={true}>
                <View style={styles.slide1}>
                  <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
                </View>
              </Swiper>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

export default home;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    fontFamily: "Myriad"
  },
  wrapper2: {},
  wrapper1: {
    alignItems: "center",
    marginTop: 70
  },
  containerstyle: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10
  },
  containerstyle2: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10
  },
  containerstyle1: {
    backgroundColor: "#ffa811",
    borderColor: "#222",
    borderWidth: 1,
    borderRadius: 30,
    fontFamily: "Myriad"
  },
  linearGradient: {
    flex: 1
  },
  discusscontainer: {
    borderColor: "#2222",

    borderRadius: 28,
    alignItems: "center",
    fontFamily: "Myriad"
  },
  leftlay: {
    top: 50,
    width: "30%",
    height: 130,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    fontFamily: "Myriad",

    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ddd",
    borderTopWidth: 0,
    borderRightWidth: 0,

    borderColor: "#ddd",

    shadowColor: "#222",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 2
  },
  rightlay: {
    top: 50,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    width: "60%",
    height: 130,
    backgroundColor: "white",

    borderWidth: 2,
    borderColor: "#ddd",
    borderTopWidth: 0,
    borderLeftWidth: 2,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.9,
    shadowRadius: 15
  },
  rightlay1: {
    top: 50,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    width: "40%",
    height: 130,
    backgroundColor: "white",

    borderWidth: 2,
    borderColor: "#ddd",
    borderTopWidth: 0,
    borderLeftWidth: 2,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.9,
    shadowRadius: 15
  },
  rightlay2: {
    top: 50,
    borderRadius: 15,

    overflow: "hidden",
    width: "20%",
    height: 120,
    backgroundColor: "white",
    marginLeft: 2,
    borderWidth: 2,
    borderColor: "#ddd",
    marginTop: 5,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.9,
    shadowRadius: 15
  },
  iconpos0: {
    marginTop: 20,
    alignItems: "center"
  },
  iconpos: {
    alignItems: "center",
    marginTop: 20
  },
  iconpos1: {
    marginTop: 10,
    marginLeft: 5,
    alignItems: "flex-start"
  },
  Distext: {
    fontSize: 17,
    marginTop: 20,
    textAlign: "center",
    color: "#70111e",
    fontWeight: "bold"
  },
  btnLogin1: {
    width: 220,
    height: 50,
    backgroundColor: "#9F035C",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#2222",
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 28
  },
  text: {
    marginLeft: 10,
    color: "white",
    fontSize: 17
  },
  Swipercon: {
    height: 155,
    paddingLeft: 30,
    paddingRight: 30
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 25
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
    borderRadius: 25
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BB",
    borderRadius: 25
  }
});
