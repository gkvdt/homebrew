import React from 'react';
import {View,Text,AsyncStorage} from 'react-native';

class Test extends React.Component{
    constructor(props){
        super(props)

        var x = {
            a:'asda',
            b:'asdasd'
        }
    }
    _storeData = async () => {
        try {
          await AsyncStorage.setItem('q', this.x);
          alert('succes')
        } catch (error) {
          alert('err')
        }
      }
      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('c');
          if (value !== null) {
            // We have data!!
          }
         } catch (error) {
           // Error retrieving data
         }
      }
      componentWillMount(){
          this._storeData();
          this._retrieveData()
      }

    render(){
        return(
            <View>
                <Text>asdfsadf</Text>
            </View>
        )
    }

}

export default Test;

