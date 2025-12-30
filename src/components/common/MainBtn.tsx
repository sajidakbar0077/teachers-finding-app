import {Text, TouchableOpacity,ButtonProps } from 'react-native'
import React, { ReactNode } from 'react'
import { style } from '../../styles/Style'
import { MainBtnProps } from '../../types/PropsType'
import MainText from './MainText'

const MainBtn:React.FC<MainBtnProps> = ({btnText,onPress}) => {


  return (
     <TouchableOpacity style={style.mainBtn} onPress={onPress}>
    <MainText style={style.mainBtnText}>{btnText}</MainText>
   </TouchableOpacity>
  )
}

export default MainBtn