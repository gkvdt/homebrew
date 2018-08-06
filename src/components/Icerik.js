import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} 
from 'react-native';


class Icerik extends React.Component{

    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text} >{this.props.text}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:24
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'#f4f4f4',
        marginLeft:20,
        marginRight:20,

    }
})
export default Icerik;
