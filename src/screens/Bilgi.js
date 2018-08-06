import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Icerik from '../components/Icerik';

class Bilgi extends React.Component{
  
    

    render(){
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.container} >
                    <ScrollView>
                        <Icerik                        
                        text='asdfasdf'/>
                    </ScrollView>
                </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        borderColor:'#885600',


        backgroundColor:'#FFA000',
        flex:1
    }
   
});
export default Bilgi;