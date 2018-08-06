import React from 'react';
import 
{
    StyleSheet,
    ImageBackground,
    View,

}
 from 'react-native';


 export default class Background extends React.Component{

    render(){
        return(
            <ImageBackground style={styles.Container}
                source={require('../../img/bg1.png')}
                resizeMode='cover'
                >

            </ImageBackground>
        )
    }

 }
 const styles = StyleSheet.create({
     Container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',  
         position:'absolute',
         width: '100%',
        height: '100%', 
     }
 })
