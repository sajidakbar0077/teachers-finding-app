import {  Text,TextProps } from 'react-native'
import React from 'react'

interface BoldTextProps extends TextProps{
  children:React.ReactNode
}

const BoldText:React.FC<BoldTextProps> = ({children,style,...props}) => {
  return (
     <Text {...props} style={[{fontFamily:"adlam"},style]}>{children}</Text>
  )
}

export default BoldText