
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
}from 'react-native';
import colors from '../Utils/colors';
 export default function SearchScreen(){
     return(
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search..." style={styles.searchInput}/>
        </View>
     )
 }
const styles=StyleSheet.create({
   searchContainer:{
        backgroundColor: colors.secondary
   },
   searchInput:{
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        backgroundColor:colors.white


   }

}
)

