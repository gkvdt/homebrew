import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
}
 from 'react-native';
 import Background from '../components/Background';
 import Logo from '../components/Logo';
 import Notice from '../components/Notice';
 import Button from '../components/Button2';

 class Hesap extends React.Component{
     static navigationOptions= {
         header:null
     }
     constructor(props){
         super(props)

        this.state={
            input:0
        }
     }
    render(){
        var {navigate,goBack} = this.props.navigation;
        return(
            <View style={styles.container} >
                <Background/>
                <Logo text='Hesaplama'/>
                <Notice text='Kullanacağınız ana malt miktarını girerek biranızda kullanacağınız hammaddelerin miktarını ve yaklaşık olarak elde edeceğiniz miktarları elde edebilirsiniz.'/>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input} 
                            keyboardType='numeric'
                            placeholder='0'
                            placeholderTextColor='#f4f4f4'
                            onChangeText={(value) => {  
                                try {
                                    if(isFinite(value) && value > 0){
                                        this.setState({
                                        input:value 
                                    })
                                }else{
                                    }
                                    
                                } catch (error) {
                                }

                                
                            }}
                        ></TextInput><Text style={styles.kg}>kg</Text>
                </View>
                <Button text='Hesapla' 
                    onClick={()=>{
                        navigate('Sonuc',{arpa:this.state.input})
                    }}
                />
                
                <Button text='Geri' 
                    onClick={() => {
                        goBack()
                    }}
                />

            </View>
        )
    }
 }
 const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    input:{
        color:'#f4f4f4'
    },
    inputBox:{
        flexDirection:'row',
        marginTop:7
    },
    kg:{
        alignSelf:'center',
        marginLeft:0,
        color:'#f4f4f4',
        marginBottom:9
    }

 });

 export default Hesap;
