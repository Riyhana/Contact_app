
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native';
import colors from '../Utils/colors';
import Avatar from './Avatar';
import{MaterialCommunityIcons} from '@expo/vector-icons'

 export default function ContactListItem({ name, phone, onPress,onDeleteContact }){
     return(
     <TouchableOpacity onPress={onPress} style={styles.container}>
         <View style={styles.contactInfo}>
             <Avatar name={name} size={50}/>
             <View style={styles.detail}>
                 <Text style={styles.title}>{name}</Text>
                 <Text style={styles.subTitle}>{phone}</Text>
             </View>
         </View>
         <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name={'trash-can'} color={red} size={24} onPress={onDeleteContact}/>
        </View>
     </TouchableOpacity>
     )
 }
const styles=StyleSheet.create({
   container:{
      
   },
   contactInfo:{
       flex:1,
       flexDirection:'row',
       paddingVertical:16,
       paddingRight: 26,
       backgroundColor:colors.white,
       borderBottomWidth:0.5,
       borderBottomColor:'gray'
   },
   detail:{
       flex:2,
       marginLeft:20
   },
   title:{
       color: colors.black,
       fontSize:16,
       fontWeight:'bold'
   },
   subTitle:{
       color :colors.primary
   },
   deleteIcon:{
       flex:1,
        marginLeft: 100

   }
   
}
)

