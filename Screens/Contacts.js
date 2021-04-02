
import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
}from 'react-native';
import{Feather} from '@expo/vector-icons';
import colors from '../Utils/colors';
import ContactListItem from '../components/ContactListItem';
import * as SQLite from 'expo-sqlite';
const db =SQLite.openDatabase('contacts.db');

 export default function Contacts({navigation}){
     const [contacts,setContacts] = useState([]);
     useEffect(()=>{
         db.transaction((tx)=>{
             tx.executeSql('select * from contact',[],(tx,{rows})=>{
                 console.log(rows)
                 var data =[];
                 for(var i=0; i < rows.length; i++){
                     data.push(rows[i]);
                 }
                 setContacts(data)
             })
         })
     })
     const deleteContact = (id)=>{
         db.transaction(tx=>{
             tx.executeSql('delete from contact where id=?',[id]);
         })
     }
     return(
        <View style={styles.contactContainer}>
            { contacts.length>0 ?
            <FlatList 
            data={contacts} 
            keyExtractor ={(item)=>item.id}
            renderItem={({item})=>{
                return <ContactListItem 
                name={item.name}
                phone={item.phone} onPress={()=>navigation.navigate('Profile',{item:item})} onDeleteContact={()=>deleteContact(item.id)}/>
            }}/>: <View>
                        <Text style={styles.content}>No Contacts for display!</Text>
                </View>}
            <TouchableOpacity style={styles.floatButton} onPress={()=>navigation.navigate('CreateContact')}>
                 <Text>
                    <Feather name="plus" size={28} color="white"/>
                 </Text>
            </TouchableOpacity>
        </View>
     ) 
 }
const styles=StyleSheet.create({
    contactContainer:{
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:colors.white
    },
    floatButton:{
        backgroundColor:'orange',
        padding:20,
        borderRadius:'50%',
        position:'absolute',
        bottom:30,
        right:40
    },
    content:{
        justifyContent:'center',
        fontSize:20,
        color:colors.black,
        fontWeight:'bold',
        position:'absolute',
        top:250,
        left:'15%'
    }
}
)

