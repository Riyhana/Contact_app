
import React from 'react';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import colors from '../Utils/colors';

 export default function Avatar({name,size}){
     const initial = name[0].toUpperCase();
     return(
         <View style={[styles.avatarContainer,{height: size, width:size}]}>
             <Text style={styles.avatarTxt}>{initial}</Text>
         </View>
     )
 }
const styles=StyleSheet.create({
    avatarContainer:{
        borderRadius :'50%',
        borderColor : colors.white,
        backgroundColor : colors.primary,
        justifyContent : 'center',
        alignItems: 'center' 
    }, 
    avatarTxt:{
          color : colors.white  
    }
}
)

