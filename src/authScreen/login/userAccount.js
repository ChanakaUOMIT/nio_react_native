/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View,Image,ScrollView,TextInput,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight,AsyncStorage,} from 'react-native';
import { Container, Header, Content, Button, Text,Input, Label,Item,Form, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';



//const  { width: WIDTH } = Dimentions.get()
export default class SignUp extends Component {

  constructor(){
    super();

    this.state = {
      email: "",
      first_name: "",
      second_name: "",
      password: "",
      
      errors: [],
      showProgress: false,
    }
} 
onPressSubmitButton() {
  this.onFetchLoginRecords();
} 

async onFetchLoginRecords() {

var data = {
 email: this.state.email,
 password: this.state.password,
 second_name: this.state.second_name,
 first_name: this.state.first_name
};

try {
  let response = await fetch(

   'http://cupdes.com/api/v1/create-user',
   {
     method: 'POST',
     headers: {
      'X-AUTH-TOKEN': 'Px7zgU79PYR9ULEIrEetsb',
      'Content-Type': 'application/json'
     },
    body: JSON.stringify(data)
  }
 ).then(response => response.json())
 .then((responseJson) => {
 console.log(responseJson,"rtghj") 
 // this.datahandler(responseJson)
 console.log(responseJson.success,"success") 

 if (responseJson.success === "true") {
   this.props.navigation.navigate('loading');
  }else{
   
   alert("authentication data invalid!!!");
}
 })

     } catch (errors) {
    alert(errors);
} 
}




    SignupHandler=()=>{
        this.props.navigation.navigate('DrewerNav')
    }
    SignuptologinHandler=()=>{
        this.props.navigation.navigate('SigntoLogin')
    }
    


      
  render() {
    return (
      
      <KeyboardAvoidingView
      style={styles.wrapper}
      >
        
        <View style={styles.scrollWrapper}>
 <ScrollView style={styles.scrollView}>

   
         
 <View style={styles.LogoContainer}>
        

        
        
        
        
        <Text style={styles.createNew1}>  Edit  ACCOUNT</Text>  
        
        
        </View>
        
        
        <View>
        <Form style={styles.inputwrapper} >
        
            <Item  >
            <Icon  name="user" size={25} color="white"/>
              <Input     style={styles.input}
                          placeholder='Your name'
                          placeholderTextColor={'white'}
                         name="first_name"
                         onChangeText={text => this.setState({ first_name: text })}
              />
            </Item>
            <Item  >
            <Icon  name="user-tie" size={25} color="white"/>
              <Input     style={styles.input}
                          placeholder='Your Profession'
                          placeholderTextColor={'white'}
                         name="Profession"
                         onChangeText={text => this.setState({ Profession: text })}
              />
            </Item>
            <Item >
            <Icon  name="user-tie" size={25} color="white"/>
              <Input style={styles.input}
                      placeholder='Your e-mail'
                      placeholderTextColor={'white'}
                    name="second_name"
                    onChangeText={text => this.setState({ second_name: text })}
               />
            </Item>
            <Item   >
            <Icon  name="lock" size={25} color="white"/>
              <Input  style={styles.input}
                      secureTextEntry 
                      placeholder='Your password'
                      placeholderTextColor={'white'}
                      name="email"
                      onChangeText={text => this.setState({ email: text })}
              />
            </Item >
            <Item  >
            <Icon  name="unlock" size={25} color="white"/>
              <Input  style={styles.input}
                      secureTextEntry 
                      placeholder='Confirm password'
                      placeholderTextColor={'white'}
                      name="password"
                      onChangeText={text => this.setState({ password: text })}
              />
            </Item>
          </Form>
        </View>
        <View>
         
       
          
          <TouchableOpacity >
          <Button style={styles.btnLogin} onPress={this.onPressSubmitButton.bind(this)}
         // onPress={this.SignupHandler
              
    >
            <Text style={styles.text} >Sign Up </Text>

            </Button>
            
          </TouchableOpacity>
          
          
         
          
         
        
        
      </View>
      </ScrollView>
 </View>
 
      </KeyboardAvoidingView>
      
      
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
         
    flex:1,
    backgroundColor:'#6D0F49',
    
    position:'relative',
    
    
   
    },
    scrollViewWrapper:{
    marginTop:70,
    flex:1,
    },
    scrollView:{
    paddingLeft:25,
    paddingRight:30,
    paddingTop:20,
    // flex:1
    
    
    },
    Logo:{
      

       marginTop:12,
      width: 125,
        height:125,
        borderRadius:70,
        marginLeft:35,
        marginRight:25,
        
        
        
      
        
    },
  
  LogoContainer: {
    marginTop:5,
    alignItems: 'center',
    position:'relative'

  },
  LogoText: {
      fontSize: 30,
      textAlign: 'center',
      position: 'relative',
      top: '-26%',
     // fontFamily: 'Titillium Web',
      fontFamily: 'sans-serif',
      color:'#050404'
  },
  LogoText1: {
    fontSize: 30,
    textAlign: 'center',
    position: 'relative',
    top: '-10%',
   // fontFamily: 'Titillium Web',
    fontFamily: 'sans-serif',
    color:'#050404'
},
inputwrapper:{
  marginTop:15,
  alignItems:'center',
  
  
},
  input:{
       
     minHeight:5,
     fontSize:15,
     color:'white'
    
     
  },
  
  
  btnLogin:
  {
    marginTop:25,
    width:220,    
    height: 50,                 
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#2222',
    opacity:0.9,
      borderWidth:2,
      borderRadius:28
  },
  text:{
    color: '#2222',
    fontSize: 17,
  },
  forgot:{
    paddingTop:25,
    color:'#fff',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  createNew:{
    
    paddingTop:29,
    textAlign:'center',
    
    marginLeft: 'auto',
    marginRight: 'auto',
    color:'white',
    opacity:0.9,
    fontSize: 14,
    fontWeight: 'bold',

  },
  createNew1:{
   
    marginTop:25,

    textAlign:'auto',
    
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    position:'relative'
    

  },
  
  
  
    
  
  
  
});
