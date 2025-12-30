import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import CarouselText from './CarouselText'
import { style } from '../../styles/Style'

const Carousel = () => {
  return (
    <ImageBackground source={require("../../assets/images/carouselBg.png")} style={{marginTop:24}}>
    <Swiper  showsButtons={false}  height={180} style={{padding:30}}
    
    dot={<View style={style.carouselDot}></View>}
    activeDot={<View style={style.carouselDotActive}></View>}
    autoplay={true}
    autoplayTimeout={6}
    >
 
       <CarouselText qoute="I've never known any trouble than an hour's reading didn't assuage." author="Auther" />
       <CarouselText qoute="I've never known any trouble than an hour's reading didn't assuage." author="Auther" />
       <CarouselText qoute="I've never known any trouble than an hour's reading didn't assuage." author="Auther" />
       <CarouselText qoute="I've never known any trouble than an hour's reading didn't assuage." author="Auther" />
     
    </Swiper>
    </ImageBackground>
  )
}

export default Carousel