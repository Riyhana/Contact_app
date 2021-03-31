import React,{useEffect} from 'react';
import{ StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialIcons} from '@expo/vector-icons';
const Stack = createStackNavigator();
import Contact from './Screens/Contacts'
import CreateContact from './Screens/CreateContact'
import Profile from './Screens/Profile'
import SearchScreen from './Screens/SearchScreen'
import * as SQLite from 'expo-sqlite' 
const db = SQLite.openDatabase('contacts.db');

export default function App() {
  useEffect(()=>{
    db.transaction(tx=>{
      tx.executeSql('create table if not exists contact(id integer primary key autoincrement,name text,phone text,email text);',[],()=>console.log('Table created successfully!'))
    })

    
  })
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Contacts" component={Contact} options={({navigation})=>({headerRight:()=> (
           <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
             <Text>
                <MaterialIcons name="search" size={24} color="black"/>
             </Text>
           </TouchableOpacity>
         )}) }/>
         <Stack.Screen name="CreateContact" component={CreateContact}/>
         <Stack.Screen name="Profile" component={Profile}/>
         <Stack.Screen name="Search" component={SearchScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#f8f4f4',
     paddingVertical:10,
     
     
  },
});
