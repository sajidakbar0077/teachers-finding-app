import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { style } from '../../../styles/Style'
import MainText from '../../../components/common/MainText'
import BoldText from '../../../components/common/BoldText'
import CommentCard from '../../../components/feedback/CommentCard'
import MainBtn from '../../../components/common/MainBtn'

const FeedBackScreen = () => {
    const [rating, setRating] = useState(0);
  return (
    <ScrollView contentContainerStyle={style.wrapper}>
      <Image source={require("../../../assets/images/tutors.png")} style={style.feedBackTutorImage}/>
      <BoldText style={{marginTop:20,marginBottom:10}}>Give Us A Feedback</BoldText>
     <MainTextInput style={[style.textField,{marginBottom:10}]} placeholder='Your Feedback' multiline numberOfLines={4} textAlignVertical='top'/>
     <MainBtn btnText='Comment'/>
      <BoldText style={{marginTop:10}}>Comments</BoldText>
      <CommentCard/>
      <CommentCard/>
      <CommentCard/>
    </ScrollView>
  )
}

export default FeedBackScreen