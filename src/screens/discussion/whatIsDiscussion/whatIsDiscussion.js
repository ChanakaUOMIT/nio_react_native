
import React, {Component} from 'react';
import {Text,Platform, StyleSheet,View,Image,ScrollView,TextInput,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight,AsyncStorage,} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import CustomHeader from '../../../components/Header/Header';
import DiscussedCard from './discussedCard';
import Icon_Ionicons from 'react-native-vector-icons/Ionicons';
import Icon_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_MaterialIcons from 'react-native-vector-icons/MaterialIcons';

data= [{
    id: 1,
    user: {
      name: 'Juniper',
    },
    subject: 'Hello World!',
    description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
  }, {
    id: 2,
    user: {
      name: 'Robert'
    },
    subject: 'React is <3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
  }, {
    id: 3,
    user: {
      name: 'you can search for me using a regex : `java$`'
    },
    subject: "What's Up?",
    description: 'Reference site about Lorem Ipsum, giving  chanaka information on its origins, as well as a random Lipsum generator.'
  
  }
    , {
    id: 4,
    user: {
      name: 'Georgia'
    },
    subject: 'How are you today?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
  
  }, {
    id: 5,
    user: {
      name: 'Albert'
    },
    subject: 'Hey!',
    description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
  
  }, {
    id: 6,
    user: {
      name: 'Zoey'
    },
    subject: 'React Native!',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
  
  }, {
    id: 7,
    user: {
      name: 'Cody'
    },
    subject: 'is super!',
    description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
  
  }, {
    id: 8,
    user: {
      name: 'Chili'
    },
    subject: 'Awesome!',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
  
  }]

class WhatIsDiscussion extends Component{
    constructor(){
        super();
        this.state = { text: '' };
        } 

        
    
      render() {
        return ( <View>
        <ScrollView>
            <CustomHeader 
                    title=""
                    alignItems = 'center'  
                    type="sub"
                    sub="dotMenu"
                    openDotMenu={()=>alert("Clicked")}

            />

             <View>
                {/* <SearchBar /> */}
                <Header style={{ backgroundColor: '#6D0F49' }}
                    androidStatusBarColor={'#6D0F49'}>
                <Left>
                    <TouchableOpacity transparent>
                    {/* <Icon name='md-contact' /> */}
                    <Icon_Ionicons 
                      name='md-contact' 
                      color="white"
                      size={30}
                    />
                    </TouchableOpacity>
                </Left>
                <Body>
                    {/* <Title>Header</Title> */}
                   <Text style={styles.title}>What is Discussion</Text>
                </Body>
                <Right>  
                    <TouchableOpacity transparent>
                    <Icon_Ionicons 
                      name='md-contacts' 
                      color="white"
                      size={30}
                    />
                    <Text>05</Text>
                    </TouchableOpacity>
                </Right>
                </Header>
            </View>
            {/* <DiscussedCard /> */}

            {data.map(email => {
            return (
            //   <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
            //     <View>
            //       <Text>{email.user.name}</Text>
            //       <Text style={styles.emailSubject}>{email.subject}</Text>
            //       <Text>{email.description}</Text>

            //     </View>
            //   </TouchableOpacity>

            <View key={email.id} style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={styles.headerBlock}>
              <View style={{width:  '20%', height: 75,  padding:10,}}>
                  <Icon_Ionicons  
                        name="md-contact"                    
                        size={70} color="blue"
                  />
              </View>
                <View style={styles.discription} >
                  <Text style={styles.header}>{email.description}</Text>
                </View>
            </View>
        </View>
        </View>
            )
          })}
        </ScrollView>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            {/* <Header style={{ backgroundColor: '#6D0F49' }}
                    androidStatusBarColor={'#6D0F49'}>
                <Body>
                   <TextInput
                        style={styles.textArea}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder={"Input your Discussion"}
                    />
                </Body>
                <Right> 
                    <Button transparent>
                    <Icon name='pencil' />
                    </Button>
                </Right>
                </Header> */}
                <View style={styles.card}>
              <View style={styles.headerBlock}>
                  <View style={{width: '85%', height: 75, backgroundColor: '#9F035C',  padding:10,}} >
                    {/* <Text style={styles.header}>
                         Vvhjvhdf
                    </Text> */}
                    <TextInput
                        style={styles.textArea}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder={"Input your Discussion"}
                    />
                  </View>
                  <View style={{ width:'15%', height: 75, backgroundColor: '#9F035C',  padding:10,}}>
                    <TouchableOpacity>
                        <Icon_Ionicons  
                          name="md-send"                    
                          size={40} color="white"
                        />
                    </TouchableOpacity>
                </View> 
              </View>
          </View>
        </View>
        </View> )} 
        
}

export default WhatIsDiscussion;

const styles = StyleSheet.create({
    cardContainer:{
        margin:10,
    },
    card:{
        // borderLeftColor: '#6D0F49',
        // borderLeftWidth: 10,
    },
    headerBlock:{
        // flex:1,
        flexDirection:'row',
        backgroundColor:'#e1e6ef',
    },
    header:{
        // fontSize:24,
    },

    textContainer:{
        padding:10,
        backgroundColor:'#c7ccd6'
    },

    text:{
        
    },

    discription:{
        width: '75%', 
        height: 75, 
        backgroundColor: 'powderblue',  
        padding:10,
        borderRadius:75,
        marginLeft:10
    },

    textArea:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius:20,
        width:'100%',
        fontFamily: "MyriadProBoldSemiExtended",
    },

    title:{
      color:'white',
      fontSize:19,
      fontWeight:'600'
    }
    
})