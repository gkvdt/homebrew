import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
}
 from 'react-native';
 import Background from '../components/Background';
 import Logo from '../components/Logo';
 import Button from '../components/Button3'
 import Table from '../components/Table';


 class Sonuc extends React.Component{
     static navigationOptions= {
         header:null
     }
     constructor(props){
         super(props)

         this.state={
            arpa:props.navigation.getParam('arpa',0),
            haslama:0,
            yagmur:0,
            serbet:0,    
            maya:0,
            pelet:0,
            kuru:0,
        }
     }
     componentWillMount(){
         let arpa = this.state.arpa;
         let haslama = (arpa * 4.6).toFixed(1);
         let yagmur = (arpa);
         let serbet = (haslama - (0.085*haslama)).toFixed(1);
         let maya = (serbet/2.5).toFixed(0);
         let kuru = (serbet * 4 ).toFixed(0);
         let pelet= (serbet * 1.5).toFixed(0) ;
        this.setState({
            haslama:haslama,
            yagmur:yagmur,
            serbet:serbet,    
            maya:maya,
            pelet:pelet,
            kuru:kuru,

        })

     }
     
    render(){
        var {navigate,goBack} = this.props.navigation;
        
        return(
            <View style={styles.container} >
                <Background/>
                <Logo text='Değerler' />
               
                <Table
                    malt={this.state.arpa}
                    maya={this.state.maya}
                    pelet={this.state.pelet}
                    kuru={this.state.kuru}
                    haslama={this.state.haslama}
                    yagmur={this.state.yagmur}
                    serbet={this.state.serbet}
                />     
                
                <Button text='Tekrar Hesapla'
                    onClick={() => {
                        goBack()
                    }}
                />
                <Button text='Ana Menü' onClick={() => {
                    navigate('Menu')
                }}/>

            </View>
        )
    }
 }
 const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }

 });

 export default Sonuc;
