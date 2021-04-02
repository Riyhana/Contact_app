
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native';
import colors from '../Utils/colors';
import Avatar from './Avatar';

 export default function ContactThumbnail({ name, phone }){
     return(
        
         <View style={styles.thumnailContainer}>
            <Avatar name={name} size={90} style={styles.avatarContainer}/>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.phone}>
                {phone}
            </Text>
         </View>
         
         )}
const styles=StyleSheet.create({
    thumnailContainer:{
        justifyContent:'center',
        alignItems:'center',
       

    },
    avatarContainer:{
        borderWidth:1,
        color:colors.white,
        borderRadius:'50%'
    }
    ,
   name:{
       color:colors.white,
       fontSize:16,
       fontWeight:'bold'
       
   },
   phone:{
    color:colors.white,
    fontSize:16,
    fontWeight:'bold'
   }
}
);