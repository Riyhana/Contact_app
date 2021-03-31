
import React,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
}from 'react-native';
import colors from '../Utils/colors';
import * as SQLite from 'expo-sqlite';
const db= SQLite.openDatabase('contacts.db');

 export default function CreateContact({navigation}){
     const [name,setName] = useState('');
     const [phone,setPhone] = useState('');
     const[email,setEmail] = useState('');
     const addContact = (name,phone,email)=>{
        
         db.transaction(tx=>{
             tx.executeSql('insert into contact(name, phone, email) values (?,?,?);',['james', 'james@gmail.com',8999],()=>navigation.navigate('Contacts'))
         })
     }
     return(
        <View style={styles.formContainer}>
            <TextInput placeholder="name" style={styles.input} value={name} onChangeText={(name)=>setName(name)}/>
            <TextInput placeholder="email" keyboardType="email-address" style={styles.input} value={email} onChangeText={(email)=>setEmail(email)}/>
            <TextInput placeholder="phone" keyboardType="numeric" style={styles.input} value={phone} onChangeText={(phone)=>setPhone(phone)}/>
            <TouchableOpacity style={[styles.button,{backgroundColor:colors.primary}]}>
                <Text style={styles.buttonTxt} onPress={()=>addContact(name,phone,email)}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]}>
                <Text style={styles.buttonTxt}>Cancel</Text>
            </TouchableOpacity>
        </View>
     )
 }
const styles=StyleSheet.create({
    formContainer:{
        borderRadius:30,
        marginTop:60,
        paddingVertical:20,
        paddingHorizontal:40,
        backgroundColor: colors.white

    },
    input:{
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor:colors.secondary,
        borderBottomWidth:1
    },
    button:{
        borderRadius:5,
        marginTop:20,
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTxt:{
        color:colors.white
    }

}
)

