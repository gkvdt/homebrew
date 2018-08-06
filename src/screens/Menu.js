import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Text,

} 
from 'react-native';
import Button from '../components/Button2';
import Backgrond from '../components/Background';


export default class Menu extends React.Component{
    static navigationOptions={
        header:null
    }
    render(){
        var {navigate} = this.props.navigation;
        
        
        return(
        <View style={{ flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}> 
        <Backgrond/>
        <View style={{width:'100%',height:120,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:50,color:'#f4f4f4',fontWeight:'bold',fontStyle:'italic', fontFamily: 'comic-sans' }} >Menü</Text>
        
        </View>
            <ScrollView style={{width:'100%'}}>
            <Button text='Hesap'
                onClick={() => {
                    navigate('Hesap')
                }}
            />
            <Button text='Bilgi'
                onClick={() => {
                    navigate('Bilgi')
                }}
            />

            </ScrollView>



        </View>
    )}


}