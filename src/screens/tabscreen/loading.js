
import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,ImageBackground,Image
} from 'react-native';
import { Container,  Content, Card, CardItem, Right } from 'native-base';
import { Button, ThemeProvider,Header } from 'react-native-elements';
import Swiper from "react-native-web-swiper";
import Icon from 'react-native-vector-icons/FontAwesome5';
     
     
    
     
     
     import CustomHeader from '../../components/Header/Header';
      
     class home extends Component{
     
      constructor(props){
         super(props);

         
     } 

     SkipHandler=()=>{
      this.props.navigation.navigate('DrewerNav')
  }
  
          render(){
             return(
                <ImageBackground source={require('../../Images/home1.png')}  style={{width: '100%', height: '100%'}}>
                 <View> 
                 <View style={{height: 150, backgroundColor: '#6D0F49'}} >
                
                   <View style={styles.iconpos0} style={{flex: 1,
                    flexDirection: 'row-reverse',
                    marginTop:30}}
                    onPress={this.SkipHandler}>
                  
                 <Icon  name="angle-double-right" 
                 size={25}  
                 color="white"/>
                 <Text style= {styles.createNew2} onPress={this.SkipHandler} >Skip</Text>
                 
                 </View>
<Text style= {styles.createNew1}>THIS IS NIO APP</Text>
      </View>
                  </View>
                  <View>
                    
                  </View>
                  
                  <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                   direction={"row"}
                   loop
                   autoplayTimeout={-4.5}
                   overRangeButtonsOpacity={0.3}
                  >
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#9F035C"}}>
                      <Image source={require('../../Images/logo.png')} style={styles.Logo}  />
                          
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#9F035C"}}>
                          <Text>Slide 2</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#9F035C"}}>
                          <Text>Slide 3</Text>
                      </View>
                  </Swiper>
              </View>
              
          </View>
          <View> 
                 <View style={{height: 150, backgroundColor: '#6D0F49'}} />
      
                  </View>
           
                  </ImageBackground>
              )
          }
     }
      
     export default home;
     
     
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             backgroundColor: '#fff',
             alignItems: 'center',
             justifyContent: 'center',
             borderRadius:30
             },
             containerstyle:{
                backgroundColor: '#deb6ca',
             },
             createNew1:{
   
              marginTop:40,
          
              textAlign:'center',
              
              color:'white',
              fontWeight: 'bold',
              fontSize: 30,
              

              
          
            },
            createNew2:{
              
              color:'white',
             
              fontSize: 16,
              position:'relative'

              
          
            },
           
     });
  
  


