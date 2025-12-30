import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import BoldText from '../../components/common/BoldText';
import MainText from '../../components/common/MainText';
import {style} from '../../styles/Style';
import TitleText from '../../components/common/TitleText';
import InputGroup from '../../components/common/InputGroup';
import {Picker} from '@react-native-picker/picker';
import StarRating from 'react-native-star-rating-widget';
import MainBtn from '../../components/common/MainBtn';
import { NavigateProps } from '../../types/NavigationTypes';

const Filter:React.FC<NavigateProps> = ({navigation}) => {
  const subject: string[] = [
    'Computer Science',
    'Maths',
    'Physics',
    'Chemistry',
    'Biology',
    'English Literature',
    'History',
    'Geography',
    'Economics',
    'Psychology',
  ];
const gender:string[]=[
    "Male","Female","Other"
]
const [rating, setRating] = useState(0);
const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <ScrollView contentContainerStyle={style.wrapper}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <Pressable onPress={()=>navigation.navigate("layout")}>
            <Image source={require('../../assets/images/BlackBackArrow.png')} />
          </Pressable>
          <BoldText style={style.pageTitle}>Filter</BoldText>
        </View>
        <TouchableOpacity>
          <MainText style={style.smText}>clear</MainText>
        </TouchableOpacity>
      </View>


      <View style={style.subHeader}>
        <TitleText style={style.subHeading}>Location</TitleText>
      </View>
      
        <Picker
        style={style.textField}

  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>


      <View style={style.subHeader}>
        <TitleText style={style.subHeading}>Subjects</TitleText>
        <TouchableOpacity>
          <TitleText style={[style.subHeading, style.blueText]}>
            See All
          </TitleText>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {subject.map((sub, key) => (
          <Pressable key={key} style={[style.checkBox]}>
            <TitleText style={[style.checkBoxText, {color: '#4B4D69'}]}>
              {sub}
            </TitleText>
          </Pressable>
        ))}
      </ScrollView>

      <View style={style.subHeader}>
        <TitleText style={style.subHeading}>Gender</TitleText>
      </View>
        
        <View style={{display:"flex",flexDirection:"row"}}>
        {gender.map((gen, key) => (
          <Pressable key={key} style={[style.checkBox]}>
            <TitleText style={[style.checkBoxText, {color: '#4B4D69'}]}>
              {gen}
            </TitleText>
          </Pressable>
        ))}
        </View>

        <View style={style.subHeader}>
        <TitleText style={style.subHeading}>Rating</TitleText>
      </View>

         <StarRating
        rating={rating}
        onChange={setRating}
        enableHalfStar={false}
      />

        <View style={style.subHeader}>
        <TitleText style={style.subHeading}>Fee Range</TitleText>
      </View>
        <View style={{marginBottom:20}}>
            <InputGroup label="Min" password={false}/>
            <InputGroup label="Max" password={false}/>
        </View>

        <MainBtn btnText='Find Tutor'/>
    </ScrollView>
  );
};

export default Filter;
