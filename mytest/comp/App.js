import React from 'react';
import {
    View,
    Text,
}
 from 'react-native';
import Button from './Button'


 export default class App extends React.Component{
    constructor(props){
        super(props)
        this.testfun = this.testfun.bind(this)
    }

     testfun(){
         alert('asd')
     }
     render(){
         return(
             <View style={{flex:1}}>
                 <Button onClick={this.testfun}/>
             </View>
         )
     }
 }import React from 'react';
 import {Button} from 'react-native';