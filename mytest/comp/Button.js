import React from '../../../../../.cache/typescript/2.9/node_modules/@types/react';
import {
    View,
    Text,
    TouchableOpacity
}
 from 'react-native';

 export default class App extends React.Component{
     render(){
         return(
             <TouchableOpacity 
                style={{flex:1,backgroundColor:'red'}}
                onPress={this.props.onClick}
             >
                 <Text>asdfasd</Text>
             </TouchableOpacity>
         )
     }
 }