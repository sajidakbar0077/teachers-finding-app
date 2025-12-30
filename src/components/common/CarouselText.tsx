import { View, Text } from 'react-native'
import React from 'react'
import BoldText from './BoldText'
import MainText from './MainText'
import { CarouselProps } from '../../types/PropsType'

const CarouselText:React.FC<CarouselProps> = ({qoute,author}) => {
  return (
    <View>
       <BoldText style={{color:"white",fontSize:20,lineHeight:30,paddingRight:30}}>
         {qoute}
          </BoldText>
          <MainText style={{fontSize:15,color:"white",fontStyle:"italic"}}>{author}</MainText>
    </View>
  )
}

export default CarouselText