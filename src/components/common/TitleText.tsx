import {  Text,TextProps } from 'react-native'
import React from 'react'

interface TitleTextProps extends TextProps{
  children:React.ReactNode
}

const TitleText:React.FC<TitleTextProps> = ({children,style,...props}) => {
  return (
     <Text {...props} style={[{fontFamily:"Poppins-SemiBold",fontSize:20,color:"#000000"},style]}>{children}</Text>
  )
}

export default TitleText