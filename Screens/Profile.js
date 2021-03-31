
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native';
import colors from '../Utils/colors';
import ContactThumbnail from '../components/ContactThumnail'
import DetailsListItem from '../components/DetailsListItem'

 export default function Profile(props){
     const {route} = props;
     const {item} = route.params
     const {name ,phone, email} = item
     return(
        <View style={styles.container}>
            <View style={styles.thumbnailSection}>
                <ContactThumbnail name={name} phone={phone}/>
            </View>
            <View style={styles.detailSection}>
                <DetailsListItem icon ="email" title="Email" subTitle={email}/>
                <DetailsListItem icon="phone" title="Work" subTitle={phone}/>

            </View>
        </View>
     )
 }
const styles=StyleSheet.create({
  container:{
      flex: 1
  },
  thumbnailSection:{
      flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.primary,
    borderBottomWidth:1,
    borderBottomColor: colors.secondary
  },
  detailSection:{
      flex:1,
      paddingTop:10,

  }

}
)

