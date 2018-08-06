import React from 'react';
import {View,Text} from 'react-native';
import Background from '../components/Background';
import CheckBox from '../components/CheckBox';
import Notice from '../components/Notice';
import Button from '../components/Button';
import Toast from 'react-native-simple-toast';

export default class Warning extends React.Component{

    constructor(props){
        super(props)
        this.state={
            color:'grey',
            active:false,
        }

        this.CheckboxControl = this.CheckboxControl.bind(this);
        this.butonClick = this.butonClick.bind(this);
        

    }
    CheckboxControl(){

        if(this.state.active){
            this.setState({
                color:'grey',
                active:false
            })
        }else {
            this.setState({
                color:'green',
                active:true
            })
        }
    }
    butonClick(){
        if(!this.state.active){
            Toast.show('Yaşınız 18 den küçük olduğu için giriş yapamazsınız!')
        }else {
            this.navigate('Menu');
        }
        
    }
    static navigationOptions={
        header:null
    }
    render(){
        var {navigate} = this.props.navigation;
        
        return(
        <View style={{flex:1,justifyContent:'center'}}>
            <Background/>
            <Notice text='Bu program alkol/içki ticareti yapmamaktadır. Alkol içmeye özendirmemektedir.'/>
            <Notice text='
Ticari amaç olmaksızın, kendi ürettiği ürünleri kullanarak elli kilogramı aşmayan sarmalık kıyılmış tütün elde eden veya üçyüzelli litreyi aşmayan fermente alkollü içki imal edenler haricinde, Kurumdan tesis kurma ve faaliyet izni almadan; tütün işleyenler veya tütün mamulleri, etil alkol, metanol ya da alkollü içki üretmek üzere fabrika, tesis veya imalathane kuran ve işletenler bir yıldan üç yıla kadar hapis ve beşbin günden onbin güne kadar adlî para cezası ile cezalandırılır.”'/>
            <CheckBox
                yazi='18 yaşından büyüğüm.'
                color={this.state.color}
                onClick={this.CheckboxControl}
            />  

            <Button text='Giriş' onClick={() => {
                    if(!this.state.active){
                        Toast.show('Yaşınız 18 den küçük olduğu için giriş yapamazsınız!')
                    }else {
                        navigate('Menu');
                    }
                }}/>
        </View>
    )}
}