import {  Text,TextProps } from 'react-native'
import React from 'react'

interface MainTextProps extends TextProps{
  children:React.ReactNode
}

const MainText:React.FC<MainTextProps> = ({children,style,...props}) => {
  return (
     <Text {...props} style={[{fontFamily:"Poppins-Regular"},style]}>{children}</Text>
  )
}

export default MainText