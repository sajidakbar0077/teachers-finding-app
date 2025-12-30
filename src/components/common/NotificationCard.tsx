import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MainText from './MainText';

type NotificationCardProps={
    message:string;
    time:string;
    imageUrl:string
}

const NotificationCard:React.FC<NotificationCardProps> = ({message,time,imageUrl}) => {
  return (
    <TouchableOpacity style={{elevation:10,borderRadius:8,backgroundColor:"white",padding:5,marginVertical:5}}>
   <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:5}}>
   <Image source={{uri:imageUrl}} width={40} height={40} style={{borderRadius:100,objectFit:"contain",borderWidth:1,borderColor:"black"}}/> 
     <MainText style={{ flexShrink: 1, flexWrap: 'wrap', maxWidth: '80%' }}>
       {message}
      </MainText>
   </View>
     <MainText style={{textAlign:"right"}}>{time}</MainText>
    </TouchableOpacity>
  )
}

export default NotificationCard