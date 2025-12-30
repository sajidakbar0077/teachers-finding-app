import {View, Text} from 'react-native';
import React from 'react';
import {style} from '../../styles/Style';
import {Image} from 'react-native-svg';
import BoldText from '../common/BoldText';
import MainText from '../common/MainText';

const CommentCard = () => {
  return (
    <View style={style.commentCard}>
      <BoldText>Name</BoldText>
      <MainText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        voluptates debitis vel corporis asperiores in quia natus accusantium
        officiis vitae!
      </MainText>
    </View>
  );
};

export default CommentCard;
