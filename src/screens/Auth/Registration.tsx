import { View, Text, Image, Pressable, ScrollView, TouchableOpacity,useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { style } from '../../styles/Style';
import MainBtn from '../../components/common/MainBtn';
import InputGroup from '../../components/common/InputGroup';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';
import { Picker } from '@react-native-picker/picker';
import { NavigateProps } from '../../types/NavigationTypes';
import { TabView, SceneMap } from 'react-native-tab-view';
import StartingPage from '../Welcome/StartingPage';
import TutorRegistration from '../../components/tutor/TutorRegistration';
const renderScene = SceneMap({
  tutor: TutorRegistration,
  student: StartingPage,
  parent:StartingPage
});

const routes = [
  { key: 'tutor', title: 'Tutor' },
  { key: 'student', title: 'Student' },
  { key: 'parent', title: 'Parent' },
];
const Registration: React.FC<NavigateProps> = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  function navigateTo() {
    navigation.navigate('signIn');
  }


  return (
 <>
    <View style={style.loginHeader}>
      <View style={[style.flexRow, { gap: 15 }]}>
        <BoldText style={style.signUpPageName}>Register</BoldText>
      </View>

      <View style={style.signUpHeader}>
        <MainText style={style.signUptext}>Already have an account?</MainText>
        <Pressable onPress={navigateTo}>
          <MainText style={style.signUpLoginBtn}>Log In</MainText>
        </Pressable>
      </View>
    </View>
  <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
    />
    </>

 
  );
};

export default Registration;
