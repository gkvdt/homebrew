import React from 'react';
import {
    View,
    Text,
    StyleSheet,

}
 from 'react-native';



 export default class App extends React.Component{

     render(){
         return(
             <View style={styles.container}>
                 <View style={styles.leftBox} >
                    <Text style={styles.leftText} >Malt Miktarı</Text>
                    <Text style={styles.leftText} >Maya Miktarı</Text>
                    <Text style={styles.leftText} >Şerbetçi Otu (PELET)</Text>
                    <Text style={styles.leftText} >Şerbetçi Otu (KURU)</Text>
                    <Text style={styles.leftText} >Haşalama Suyu</Text>
                    <Text style={styles.leftText} >Yağmurlama Suyu</Text>
                    <Text style={styles.leftText} >Elde Edilecek Şerbet</Text>
                          

                 </View>
                 <View style={styles.rightBox} >
                    <Text style={styles.rightText} >{this.props.malt} kg</Text>
                    <Text style={styles.rightText} >{this.props.maya} gr</Text>
                    <Text style={styles.rightText} >{this.props.pelet} gr</Text>
                    <Text style={styles.rightText} >{this.props.kuru} gr</Text>
                    <Text style={styles.rightText} >{this.props.haslama} L</Text>
                    <Text style={styles.rightText} >{this.props.yagmur} L</Text>
                    <Text style={styles.rightText} >{this.props.serbet} L</Text>
                    

                 </View>
             </View>
         )
     }
 }
 const styles = StyleSheet.create({
    container:{
         backgroundColor:'#f4f4f4',
         padding:15,
         marginLeft:50,
         marginRight:50,
         borderRadius:15,
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'row',
         marginBottom:20
         
    },
    leftBox:{
        width:210,

    },
    rightBox:{
        width:70,


    },
    leftText:{
        color:'#FFA000',
        fontSize:20,
        marginBottom:10,
        marginLeft:20

    },
    rightText:{
        color:'#FFA000',
        fontSize:20,
        marginBottom:10


    }
 })