import { View, Text, Image, Pressable, ScrollView, TouchableOpacity,useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { style } from '../../styles/Style';
import MainBtn from '../../components/common/MainBtn';
import InputGroup from '../../components/common/InputGroup';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';
import { Picker } from '@react-native-picker/picker';
import { NavigateProps } from '../../types/NavigationTypes';
const TutorRegistration:React.FC<NavigateProps> = ({ navigation }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [role, setRole] = useState('student');
      const [phone, setPhone] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
    
    
      const [nameError, setNameError] = useState('');
      const [emailError, setEmailError] = useState('');
      const [passwordError, setPasswordError] = useState('');
      const [confirmPasswordError, setConfirmPasswordError] = useState('');
      const [phoneError, setPhoneError] = useState('');
    
   
      const validateName = (name: string): boolean => {
        const nameRegex = /^[a-zA-Z\s]+$/; // Allows only letters (uppercase and lowercase) and spaces
        return name.trim() !== '' && nameRegex.test(name);
      };
      
    
      const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
      };
    
      
      const validatePakistaniMobileNumber = (phoneNumber: string): boolean => {
        const phoneRegex = /^((\+92)|0)?3\d{9}$/; // Matches Pakistani mobile numbers
        return phoneRegex.test(phoneNumber);
      };
    
      const register = async () => {
        
        // Reset errors
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setNameError('')
        setPhoneError('')
        // Validation
        if(!validateName(name)){
          setNameError("The Name should not be empty or contain numbers and symbols")
          
        }
        if (!validateEmail(email)) {
          setEmailError('Please enter a valid email.');
          
        }
    
        if (!validatePassword(password)) {
          setPasswordError(
            'Password must be at least 8 characters long and include uppercase, lowercase, and a number.'
          );
          
        }
    
      if(!validatePakistaniMobileNumber(phone)){
        setPhoneError(
          'Please enter a valid Pakistani mobile number starting with +92 or 03 and containing exactly 11 digits.'
        );
        
      }    
    
        if (password !== confirmPassword) {
          setConfirmPasswordError('Passwords do not match.');
        }
    
        const payload = {
          name,
          email,
          role,
          phone,
          password,
        };
    
        if(validateName(name) && validateEmail(email) && validatePassword(password) && validatePakistaniMobileNumber(phone) && password==confirmPassword){
          try {
            const response = await fetch('http://10.0.2.2:5000/auth/registration', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log('Registration Successful:', data);
              navigation.navigate('signIn');
            } else {
              const errorData = await response.json();
              console.log('Registration Error:', errorData.message);
            }
          } catch (error: any) {
            console.error('Error:', error.message);
          }
        }
    
      };
  return (
    <ScrollView>


    {/* SignUp Inputs */}
    <View style={{ padding: 44 }}>
      <InputGroup
        label={'Name'}
        password={false}
        onChangeText={(text) => setName(text)}
      />
        {nameError ? <Text style={style.errorMsg}>{nameError}</Text> : null}
      <InputGroup
        label={'Email'}
        password={false}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? <Text style={style.errorMsg}>{emailError}</Text> : null}

      <MainText style={[style.label, { fontSize: 16 }]}>Role</MainText>
      <Picker
        style={[style.textField, { marginBottom: 20 }]}
        selectedValue={role}
        onValueChange={(value) => setRole(value)}
      >
        <Picker.Item label="Student" value="student" />
        <Picker.Item label="Teacher" value="teacher" />
        <Picker.Item label="Parent" value="parent" />
      </Picker>

      <InputGroup
        label={'Phone Number'}
        password={false}
        onChangeText={(text) => setPhone(text)}
      />
      {phoneError ? <Text style={style.errorMsg}>{phoneError}</Text> : null}
      <InputGroup
        label={'Set Password'}
        password={true}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordError ? <Text style={style.errorMsg}>{passwordError}</Text> : null}

      <InputGroup
        label={'Confirm Password'}
        password={true}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {confirmPasswordError ? <Text style={style.errorMsg}>{confirmPasswordError}</Text> : null}

      <MainBtn btnText="Register As Teacher" onPress={register} />
    </View>
  </ScrollView>
  )
}

export default TutorRegistration