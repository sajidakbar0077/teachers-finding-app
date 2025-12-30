import {View, Text, Pressable, Image} from 'react-native';
import BoldText from '../../components/common/BoldText';
import {style} from '../../styles/Style';
import MainText from '../../components/common/MainText';
import TitleText from '../../components/common/TitleText';
import React from 'react';
import { NavigateProps } from '../../types/NavigationTypes';

const TermsAndCondition:React.FC<NavigateProps> = ({navigation}) => {
  return (
    <View style={{padding: 14, height: '100%'}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10,
        }}>
        <Pressable onPress={()=>navigation.goBack()}>
          <Image source={require('../../assets/images/BlackBackArrow.png')} />
        </Pressable>
        <BoldText style={style.pageTitle}>Terms & Conditions</BoldText>
      </View>

      <MainText style={{marginTop:30}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque
        repellendus sapiente optio deserunt excepturi molestiae tenetur
        perspiciatis architecto voluptatibus porro voluptatem doloremque illo
        rerum voluptas officiis obcaecati culpa voluptate ad, ea quaerat, vitae
        quisquam! Assumenda, eveniet voluptate ab, deserunt vel quam quod modi
        incidunt suscipit nisi culpa voluptatum obcaecati?
      </MainText>

      <TitleText style={{marginTop:30}}>Terms & Use</TitleText>
      <MainText style={{marginTop:10}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque
        repellendus sapiente optio deserunt excepturi molestiae tenetur
        perspiciatis architecto voluptatibus porro voluptatem doloremque illo
        rerum voluptas officiis obcaecati culpa voluptate ad, ea quaerat, vitae
        quisquam! Assumenda, eveniet voluptate ab, deserunt vel quam quod modi
        incidunt suscipit nisi culpa voluptatum obcaecati?
      </MainText>
    </View>
  );
};

export default TermsAndCondition;