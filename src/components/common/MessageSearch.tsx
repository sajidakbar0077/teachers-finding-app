import { View, Text,StyleSheet,Image,TextInput } from 'react-native'
import React, { useState } from 'react'

const MessageSearch = () => {
    const[text,setText]=useState('')
  return (
    <View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images//SearchIcon.png')}
          style={styles.icon}
        />
       <TextInput
          style={styles.input}
          placeholder="Find message"
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      paddingHorizontal: 10,
      marginTop:15,
      borderRadius:15
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 40,
    },
  });
  
export default MessageSearch

