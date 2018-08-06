import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
} 
from 'react-native';
export default class CheckBox extends React.Component{
 

    render(){return(
        
        <View style={styles.container}>
            <TouchableOpacity onPress={this.props.onClick}
                style={[styles.touch,{backgroundColor:this.props.color,}]}
            >
            
            </TouchableOpacity>
            <Text style={styles.text}>
                {this.props.yazi}
            </Text>
        </View>
    )}
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:15
    },
    touch:{
        
        width:25,
        height:25,
        borderRadius:100,     
        borderWidth:2,
        borderColor:'white',
    },
    text:{
        color:'#f4f4f4',
        fontSize:18,
        marginLeft:15,
    }
})