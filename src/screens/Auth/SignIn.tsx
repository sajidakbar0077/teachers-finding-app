import { Image, Pressable, ScrollView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style } from '../../styles/Style';
import InputGroup from '../../components/common/InputGroup';
import MainBtn from '../../components/common/MainBtn';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';
import { AllNavigationProps, NavigateProps } from '../../types/NavigationTypes';
import { useState } from 'react';
import axios from 'axios';

const SignIn: React.FC<NavigateProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateTo(path:any){
    navigation.navigate(path)
  }

  const login = async () => {
    const payload = { email, password };
    try {
      const response = await fetch('http://10.0.2.2:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem('token', data.token); // Store JWT token
        console.log('Login Successful:', data);
        navigation.navigate('layout');
      } else {
        const errorData = await response.json();
        console.log('Error:', errorData.message);
      }
    } catch (error:any) {
      console.error('Login Error:', error.message);
    }
  };

  return (
    <ScrollView>
      <View style={style.loginHeader}>
        <BoldText style={style.regesterPageName}>Sign in to your Account</BoldText>
      </View>
      <View style={{ padding: 44 }}>
        <InputGroup label={'Email'} onChangeText={setEmail} />
        <InputGroup label={'Password'} password onChangeText={setPassword} />
        <View style={[style.flexRow,{justifyContent:"space-between"}]}>
   <Pressable onPress={()=>navigateTo("registration")}><MainText style={style.forgotBtn}>Create an Account ?</MainText></Pressable> 
   <Pressable><MainText style={style.forgotBtn}>Forgot Password ?</MainText></Pressable> 
   </View>
        <MainBtn btnText="Login" onPress={login} />
      </View>
    </ScrollView>
  );
};

export default SignIn;


