import {View, Image, TouchableOpacity, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {style} from '../../../styles/Style';
import InputGroup from '../../../components/common/InputGroup';
import MainText from '../../../components/common/MainText';
import {Picker} from '@react-native-picker/picker';
import MainBtn from '../../../components/common/MainBtn';
import BoldText from '../../../components/common/BoldText';
import { NavigateProps } from '../../../types/NavigationTypes';

const EditProfile:React.FC<NavigateProps> = ({navigation}) => {
  const [gender, setGender] = useState();
  return (
    <ScrollView style={{padding: 14, height: '100%'}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <Pressable onPress={()=>navigation.goBack()}>
            <Image source={require('../../../assets/images/BlackBackArrow.png')} />
          </Pressable>
          <BoldText style={style.pageTitle}>Edit Profile</BoldText>
        </View>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={style.profileEditCircle}>
          <View style={style.editIConProfile}>
            <Image source={require('../../../assets/images/editIcon.png')} />
          </View>
        </TouchableOpacity>
      </View>

      <InputGroup label="Name" />
      <InputGroup label="Email" />
      <InputGroup label="Phone" isPhone={true} />

      <MainText style={[style.label, {fontSize: 16}]}>Gender</MainText>
      <View
        style={[
          style.textField,
          {marginBottom: 20, padding: 0, paddingVertical: 0},
        ]}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Fe-Male" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <MainBtn btnText="Update Profile" />
    </ScrollView>
  );
};

export default EditProfile;
