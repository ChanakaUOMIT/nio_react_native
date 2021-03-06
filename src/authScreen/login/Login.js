import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  ScrollView,
  AsyncStorage
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Input,
  Label,
  Item,
  Form
} from "native-base";
import { TextInput } from "react-native-paper";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onPressSubmitButton() {
    this.onFetchLoginRecords();
    // this.props.navigation.navigate("DrewerNav");
  }

  setUserDetails = async data => {
    console.log("setUserDetails", data);
    try {
      await AsyncStorage.setItem("userDetails", JSON.stringify(data));
      //   await AsyncStorage.setItem('@MySuperStore:key1',mytoken);
      console.log("userDetals saves asyn");

      //   await AsyncStorage.setItem('@MySuperStore:key2',user_id);

      //   console.log('user_id saves asyn');
      //   await AsyncStorage.setItem("userID",user_id);
      //   console.log('user_id saves asyn');

      //   alert('Token saves asyn');
      // this.getToken();
    } catch (error) {
      alert("Role store error");
    }

    console.log("End the setUserDetails");
  };

  async onFetchLoginRecords() {
    var data = {
      // email: this.state.email,
      // password: this.state.password

      email: "test@test.com",
      password: "password"
    };

    try {
      let response = await fetch("http://cupdes.com/api/v1/login-user", {
        method: "POST",
        headers: {
          "X-AUTH-TOKEN": "Px7zgU79PYR9ULEIrEetsb",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson, "rtghj");
          // this.datahandler(responseJson)
          console.log(responseJson.success, "success");

          if (responseJson.success === "true") {
            this.setUserDetails(responseJson);
            this.props.navigation.navigate("DrewerNav");
          } else {
            alert("authentication data Invalid!!!");
          }
        });
    } catch (errors) {
      alert(errors);
    }
  }

  //  this.props.navigation.navigate('DrewerNav');

  SignUpHandler = () => {
    this.props.navigation.navigate("SignUp");
  };
  render() {
    return (
      <ImageBackground
        source={require("../../Images/backgroundimage.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView style={styles.wrapper}>
          <View style={styles.scrollWrapper}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.LogoContainer}>
                <Image
                  source={require("../../Images/logo.png")}
                  style={styles.Logo}
                />
                <Text style={styles.createNew1}>
                  Welcome to National Intellectuals Organization
                </Text>
              </View>

              <View>
                <Form style={styles.inputwrapper}>
                  <Item>
                    <Icon name="user" size={25} color="white" />
                    <Input
                      style={styles.input}
                      placeholder="E-mail"
                      placeholderTextColor={"white"}
                      name="email"
                      onChangeText={text => this.setState({ email: text })}
                    />
                  </Item>
                  <Item>
                    <Icon name="unlock" size={25} color="white" />
                    <Input
                      style={styles.input}
                      secureTextEntry
                      placeholder="Confirm password"
                      placeholderTextColor={"white"}
                      name="password"
                      onChangeText={text => this.setState({ password: text })}
                    />
                  </Item>
                </Form>
              </View>
              <View>
                <TouchableHighlight>
                  <Button
                    style={styles.btnLogin}
                    onPress={this.onPressSubmitButton.bind(this)}
                    //onPress={this.loginHandler
                  >
                    <Text style={styles.text}>Sign In</Text>
                  </Button>
                </TouchableHighlight>
                <Text style={styles.forgot}>Forgot your details?</Text>
                <TouchableOpacity onPress={this.SignUpHandler}>
                  <Text style={styles.createNew}>
                    {" "}
                    Don't you have an account ? SIGN UP
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#222",

    borderWidth: 1,
    paddingLeft: 10
  },
  wrapper: {
    flex: 1,
    //backgroundColor:'#6D0F49',
    position: "relative"
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
    // flex:1
  },
  Logo: {
    width: 150,
    height: 150
  },

  LogoContainer: {
    marginTop: 5,
    alignItems: "center",
    position: "relative"
  },
  LogoText: {
    fontSize: 30,
    textAlign: "center",
    position: "relative",
    top: "-26%",
    // fontFamily: 'Titillium Web',
    fontFamily: "sans-serif",
    color: "#050404"
  },
  LogoText1: {
    fontSize: 30,
    textAlign: "center",
    position: "relative",
    top: "-10%",
    // fontFamily: 'Titillium Web',
    fontFamily: "sans-serif",
    color: "#050404"
  },
  inputwrapper: {
    paddingTop: 30,
    position: "relative",
    alignItems: "center"
  },
  input: {
    minHeight: 5,
    fontSize: 15,
    color: "white"
  },
  btnLogin: {
    marginTop: 25,
    width: 200,
    height: 50,
    backgroundColor: "#ffffff",
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
    color: "#2222",
    fontSize: 17
  },
  forgot: {
    paddingTop: 18,
    color: "#fff",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 14
  },
  createNew: {
    marginTop: 30,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontWeight: "bold",
    fontSize: 14
  },
  createNew1: {
    marginTop: 30,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});
