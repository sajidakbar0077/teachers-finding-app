/* eslint-disable react-native/no-inline-styles */


import { View, Text, TextInput,TextInputProps } from 'react-native';
import React from 'react';
import { style } from '../../styles/Style';
import { InputProps } from '../../types/PropsType';
import MainText from './MainText';

interface InputMethods extends InputProps, TextInputProps{}
const InputGroup:React.FC<InputMethods> = ({label, password,isPhone,...props}) => {

  return (
    <View style={{marginBottom:20}}>
      <MainText style={[style.label,{fontSize:16}]}>{label}</MainText>
      <View style={style.textField}>
       <TextInput {...props} style={{padding:0}} secureTextEntry={password} keyboardType={isPhone?"phone-pad":"default"}/>
      </View>
    </View>
  );
};

export default InputGroup;
