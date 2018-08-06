import React from 'react';
import {
    View,
    Text,
    StyleSheet,

}
 from 'react-native';



 export default class App extends React.Component{

     render(){
         return(
             <View style={styles.container}>
                 <Text style={styles.text}>{this.props.text}</Text>
             </View>
         )
     }
 }
 const styles = StyleSheet.create({
    container:{
         backgroundColor:'rgba(65, 54, 42, 0.4)',
         padding:10,
         borderRadius:10,
         marginLeft:50,
         marginRight:50,
         marginBottom:15,
         alignItems:'center',
         justifyContent:'center',
         
    },
    text:{
        color:'#f4f4f4',
        fontSize:15,
        textAlign:'center'

    }
 })