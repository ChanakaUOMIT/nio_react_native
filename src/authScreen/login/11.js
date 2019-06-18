import React, { Component } from 'react';
import {View,
    TouchableOpacity,
    TouchableHighlight,
    Platform, 
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    TextInput,
    ScrollView,
    
    AsyncStorage
      
} from 'react-native';
import { Container, Header, Content, Button, Text, } from 'native-base';
import colors from '../../styles/colors';

 
class Login extends Component{
constructor(props){
    super(props);

} 

    loginHandler=()=>{
        this.props.navigation.navigate('DrewerNav')
    }
    SignUpHandler=()=>{
      this.props.navigation.navigate('SignUp')
  }
     render(){
      
        return(
          {/*} <KeyboardAvoidingView
      style={styles.wrapper}
      >
        <View style={styles.scrollWrapper}>
 <ScrollView style={styles.scrollView}>
            
            <View style={styles.container}>
        <View style={styles.LogoContainer}>
        
       <Image source={require('../../Images/logo.png')} style={styles.Logo} />
        </View>
        <View>
        <TextInput
          style={styles.Input}
          placeholder={'User Email'}
          placeholderTextColor={'#222'}
          underLineColorAndroid='transparent'
          />
        </View>
        <View>
        <TextInput
          style={styles.Input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'#222'}
          underLineColorAndroid='transparent'
          />
          <TouchableHighlight >
          <Button style={styles.btnLogin} onPress={this.loginHandler}>
    
            <Text style={styles.text} >Sign In </Text>
            </Button>
          </TouchableHighlight>
          
          
          <Text style={styles.forgot}>Forgot your details?</Text>
          <TouchableOpacity onPress={this.SignUpHandler}  >
          
          <Text style={styles.createNew}>CREATE A NEW ACCOUNT</Text>  
                   
            
            
          </TouchableOpacity>
          
          
        </View>
        
      </View>
      </ScrollView>
 </View>
        </KeyboardAvoidingView> */}
        
<TouchableHighlight >
          <Button style={styles.btnLogin} onPress={this.loginHandler}>
    
            <Text style={styles.text} >Sign In </Text>
            </Button>
          </TouchableHighlight>

         )
     }
}
 
export default Login;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: null,
      height:null,
      top:0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      //borderColor: '#222',
     // borderWidth: 1
      
    },
    wrapper:{
     
      flex:1,
      backgroundColor:'#ffffff',
     
      },
      scrollViewWrapper:{
      marginTop:70,
      flex:1,
      },
      scrollView:{
      paddingLeft:30,
      paddingRight:30,
      paddingTop:20,
      // flex:1
      },
    Logo: {
      top:'-10%',
      width: 150,
      height:150,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    LogoContainer: {
      alignItems: 'center'
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
    Input:{
        top: '-20%',
        width:250,
        height:60,
        fontSize:14,
        textAlign: 'left',
        opacity:0.5,
        margin: 15,
        borderColor: '#222',
        borderWidth: 1   
    },
    btnLogin:
    {
      top:-35,
      width:250,    
      height: 70,                 
      backgroundColor:'#a0005d',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    text:{
      color: '#ffffff',
      fontSize: 25,
    },
    forgot:{
      top:-30,
      color:'#a0005d',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    createNew:{
      top:5,
      
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      color:'#050404',
      opacity:0.6,
      fontSize: 16,
  
    }
});