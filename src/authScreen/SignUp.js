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
import ImagePicker from 'react-native-image-picker';





//const  { width: WIDTH } = Dimentions.get()
export default class SignUp extends Component {

  constructor(){
    super();

    this.state = {
      email: "",
      name: "",
      password: "",
      photo: null,
      
      errors: [],
      showProgress: false,
    }
} 



handleChoosePhoto = () => {
  const options = {
    noData: true,
  };
  ImagePicker.launchImageLibrary(options, response => {
    if (response.uri) {
      this.setState({ photo: response });
    }
  });
};

onPressSubmitButton() {
  this.onFetchLoginRecords();
} 

async onFetchLoginRecords() {

var data = {
 email: this.state.email,
 password: this.state.password,
 name: this.state.name,
 
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
    const { photo } = this.state;
    return (
      
      <KeyboardAvoidingView
      style={styles.wrapper}
      >
        
        <View style={styles.scrollWrapper}>
 <ScrollView style={styles.scrollView}>

   
         
 <View style={styles.LogoContainer}>
 <Image source={require('../Images/avatar1.png')} style={styles.Logo}  onPress={this.handleChoosePhoto} />
        
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
 
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 125, height: 125,borderRadius:80}}
           
          />
          
        )
        }
      <TouchableOpacity >
        
        <Icon  name="image" size={30} color="#222" marginTop='30' position='absolute' onPress={this.handleChoosePhoto}position='relative'/>
          </TouchableOpacity>
        
      </View> 
      
        
        
        <Text style={styles.createNew1}>  CREATE ACCOUNT</Text>  
        
        
        </View>
        
        
        <View>
        
        <Form style={styles.inputwrapper} >
        
            <Item  >
            <Icon  name="user" size={25} color="white"/>
              <Input     style={styles.input}
                          placeholder='Your name'
                          placeholderTextColor={'white'}
                         name="name"
                         onChangeText={text => this.setState({ name: text })}
              />
            </Item>
            <Item >
            <Icon  name="mail-bulk" size={25} color="white"/>
              <Input style={styles.input}
                      placeholder='Your e-mail'
                      placeholderTextColor={'white'}
                    name="email"
                    onChangeText={text => this.setState({ email: text })}
               />
            </Item>
            <Item   >
            <Icon  name="lock" size={25} color="white"/>
              <Input  style={styles.input}
                      secureTextEntry 
                      placeholder='Your password'
                      placeholderTextColor={'white'}
                      name="password"
                      onChangeText={text => this.setState({ password: text })}
              />
            </Item >
            <Item  >
            <Icon  name="unlock" size={25} color="white"/>
              <Input  style={styles.input}
                      secureTextEntry 
                      placeholder='Confirm password'
                      placeholderTextColor={'white'}
                      name="password"
                      
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
          
          <TouchableOpacity onPress={this.SignuptologinHandler}  >
          
          <Text style={styles.createNew}>  Have an account ?LOG IN</Text>  
                   
            
            
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
      width: 100,
        height:100,
        borderRadius:80,
       
        alignItems:'center',
        position:'absolute'
        
        
        
      
        
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
    
    

    textAlign:'center',
    
    marginLeft: 'auto',
    marginRight: 'auto',
    color:'white',
    opacity:0.9,
    fontSize: 14,
    fontWeight: 'bold',

  },
  createNew1:{
   
    marginTop:80,

    textAlign:'auto',
    
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    position:'relative'
    

  },
  
  
  
    
  
  
  
});
