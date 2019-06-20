import React, { Component } from "react";
import {
  Text,
  Platform,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator
} from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
// import DiscussionCard from "./discussionCard/discussionCard";
// import SearchBar from "./search/search";
import Icon_Ionicons from "react-native-vector-icons/Ionicons";
import Icon_Material from "react-native-vector-icons/MaterialCommunityIcons";
import SearchInput, { createFilter } from "react-native-search-filter";
import CustomHeader from "../../components/Header/Header";
import CreateDiscussion from "./../discussion/createDiscussion";
const KEYS_TO_FILTERS = ["user.name", "subject", "description"];

data = [
  {
    id: 1,
    user: {
      name: "Test"
    },
    subject: "Hello World!",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 2,
    user: {
      name: "Robert"
    },
    subject: "React is <3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  ",
    notification: 10
  },
  {
    id: 3,
    user: {
      name: "you can search for me using a regex : `java$`"
    },
    subject: "What's Up?",
    description:
      "Reference site about Lorem Ipsum, giving  chanaka information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 4,
    user: {
      name: "Georgia"
    },
    subject: "How are you today?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  },
  {
    id: 5,
    user: {
      name: "Albert"
    },
    subject: "Hey!",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 6,
    user: {
      name: "Zoey"
    },
    subject: "React Native!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  },
  {
    id: 7,
    user: {
      name: "Cody"
    },
    subject: "is super!",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
  },
  {
    id: 8,
    user: {
      name: "Chili"
    },
    subject: "Awesome!",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  "
  }
];

//const  { width: WIDTH } = Dimentions.get()
export default class DrawerScreen1 extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      searchTerm: "",
      discussions: "",
      isLoading: true
    };
    this.fetchDiscussion();
  }

  fetchDiscussion = async () => {
    console.log("Fetching.... Discussion");
    await fetch("http://cupdes.com/api/v1/get-userquestions/5", {
      method: "GET",
      headers: {
        "X-AUTH-TOKEN": "Px7zgU79PYR9ULEIrEetsb",
        "Content-Type": "XMLHttpRequest"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.datahandler(responseJson);
        // console.log("Fetch Discussion ", responseJson);
      })
      // .then((res) => {
      //     console.log("############ "+res+" ########### ")
      //     if (res.state === true) {
      //       this.removeToken()

      //     } else {
      //         alert(res.msg)
      //     }
      // })
      .done();
  };

  datahandler(data) {
    console.log("in dataHandler discussions ", data);

    this.setState({
      discussions: data,
      isLoading: false
    });

    console.log(this.state.discussions, " ***********");

    console.log(
      " ***********",
      this.state.discussions.data.data,
      " ***********"
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  clickHandler() {
    alert("clicked add");
    // this.props.navigation.navigate("DiscussionParticipantList");
    this.props.navigation.navigate("createDiscussion");

    // this.props.navigation.navigate("SignUp");
  }
  createkHandler() {
    alert("clicked");
    this.props.navigation.navigate("loading");
    // this.props.navigation.navigate("SignUp");
  }

  gotoDiscussion = () => {
    this._menu.hide();
    this.props.navigation.navigate("WhatIsDiscussion");
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerWait}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      const filteredEmails = this.state.discussions.data.data.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
      );
      return (
        <ScrollView>
          <View>
            <CustomHeader
              title="Discussion"
              alignItems="center"
              openDrawer={() => this.props.navigation.openDrawer()}
              // sub="dotMenu"
              gotoDiscussion={this.gotoDiscussion}
              navigation={this.props.navigation}
            />
          </View>
          <View style={{ height: 60 }}>
            {/* <SearchBar /> */}
            <Header
              style={{ backgroundColor: "#9F035C", height: 70, padding: 15 }}
              androidStatusBarColor={"#6D0F49"}
            >
              {/* <Left>
                      <Button transparent>
                      <Icon name='arrow-back' />
                      </Button>
                  </Left> */}
              <View style={{ width: "90%" }}>
                {/* <Title>Header</Title> */}
                <SearchInput
                  onChangeText={term => {
                    this.searchUpdated(term);
                  }}
                  style={styles.searchInput}
                  placeholder="Type a message to search"
                />
              </View>
              <TouchableOpacity style={{ width: "10%" }}>
                <Button transparent>
                  <Icon_Material name="pencil" color="white" size={25} />
                </Button>
              </TouchableOpacity>
            </Header>
          </View>
          <View>
            {/* <DiscussionCard />
                  <DiscussionCard />
                  <DiscussionCard /> */}

            <ScrollView>
              {filteredEmails.map(email => {
                return (
                  <TouchableOpacity
                    key={email.created_at}
                    style={styles.cardContainer}
                    onPress={() =>
                      this.props.navigation.navigate("WhatIsDiscussion")
                    }
                  >
                    <View style={styles.card}>
                      <View style={styles.headerBlock}>
                        <View
                          style={{
                            width: "25%",
                            height: 75,
                            backgroundColor: "#F5F5F5",
                            padding: 10
                          }}
                        >
                          <Icon_Ionicons
                            name="md-contact"
                            size={45}
                            color="#6D0F49"
                          />
                        </View>
                        <View
                          style={{
                            width: "50%",
                            height: 75,
                            backgroundColor: "#F5F5F5",
                            padding: 10
                          }}
                        >
                          <Text style={styles.header}>{email.creator}</Text>
                          {/* <Text>Today, 12 AM</Text> */}
                          <Text>{email.created_at}</Text>
                        </View>
                        <View
                          style={{
                            width: "25%",
                            height: 75,
                            backgroundColor: "#F5F5F5",
                            padding: 10
                          }}
                        >
                          <Text>{email.notification}</Text>
                          {email.notification == 10 ? (
                            <Text>{email.notification}</Text>
                          ) : (
                            <Text />
                          )}
                        </View>
                      </View>

                      <View style={styles.textContainer}>
                        <Text style={styles.text}>{email.question}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.clickHandler}
                style={styles.TouchableOpacityStyle}
              >
                <Image
                  source={{
                    uri:
                      "https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png"
                  }}
                  style={styles.FloatingButtonStyle}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 10
  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)"
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 25,
    width: "100%"
  },

  cardContainer: {
    margin: 10
  },
  card: {
    borderLeftColor: "#6D0F49",
    borderLeftWidth: 10
  },
  headerBlock: {
    // flex:1,
    flexDirection: "row",
    backgroundColor: "#e1e6ef"
  },
  header: {
    fontSize: 24
  },

  textContainer: {
    padding: 10,
    backgroundColor: "#EEEEEE"
  },

  text: {},

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50
    //backgroundColor:'black'
  }
});
