import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Logo extends React.Component{
    render(){
        return(
        <View style={styles.viv}>
            <Text style={styles.tex} >{this.props.text}</Text>
        
        </View>
        )
    }
}
const styles = StyleSheet.create({
    viv:{
        width:'100%',
        height:120,
        justifyContent:'center',
        alignItems:'center'
    },
    tex:{
        fontSize:50,
        color:'#f4f4f4',
        fontWeight:'bold',
        fontStyle:'italic',
    }
});

export default Logo;