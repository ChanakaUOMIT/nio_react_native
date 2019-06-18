import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,ImageBackground
} from 'react-native';
import { Container,  Content, Card, CardItem,Icon, Right } from 'native-base';
import { Button, ThemeProvider,Header } from 'react-native-elements';
import CustomHeader from '../../components/Header/Header';
 
class DrawerScreen1 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <ImageBackground source={require('../../Images/home1.png')}  style={{width: '100%', height: '100%'}}>
            <View> 
                <CustomHeader 
                    title="Discussion"
                    alignItems = 'center' 
                   
                    
                />
                
                
                
             </View>
             </ImageBackground>
         )
     }
}
 
export default DrawerScreen1;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
        containerstyle:{
           backgroundColor: '#deb6ca',
        }
});