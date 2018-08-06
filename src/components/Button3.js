import React from 'react';
import 
{
    Text,
    StyleSheet,
    TouchableOpacity

}
 from 'react-native';

 export default class Button extends React.Component{

    render(){
        return(
            <TouchableOpacity 
                onPress={this.props.onClick}
                style={styles.Button}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }

 }
 const styles = StyleSheet.create({
     Button:{
         backgroundColor:'#F4F4F4',
         justifyContent:'center',
         alignItems:'center',
         alignSelf:'center',
         padding:5,
         borderRadius:12,
         width:'60%',
         margin:5

     },
     text:{
         fontSize:18,
         color:'#FFA000',
         

     }

     
 })
