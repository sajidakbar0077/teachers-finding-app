import { View, Text, Image, StyleSheet,TextInput, ScrollView, Pressable} from 'react-native'
import React, { useState } from 'react'

const SendingMessage = () => {
    const [message,setMessage]=useState('')
  return (
    
   
    <ScrollView>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:10,marginTop:70}}>
      <View style={styles.inputContainer}>
       <TextInput
          style={styles.input}
          placeholder="Send a Message..."
          value={message}
          onChangeText={setMessage}
        />
        <Image
          source={require('../../assets/images//ImageFileIcon.png')}
          style={styles.icon}
        />
      </View>
    <View style={{backgroundColor:'blue',width:50,height:50,alignItems:'center',justifyContent:'center',borderRadius:25}}>
     <Image source={require('../../assets/images//BoldForwardArrow.png')} style={{width:25,height:25,resizeMode:'contain'}}/>
   </View>
    </View>
    </ScrollView>
    
  )
}

const styles=StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#254E7E17',
        width: '80%',
        height:55,
        paddingHorizontal: 10,
        borderRadius:20
      },
      icon: {
        width: 30,
        height: 30,
        marginRight:10,
      },
      input: {
        flex: 1,
        height: 60,
        fontSize: 18,
      },
})

export default SendingMessage