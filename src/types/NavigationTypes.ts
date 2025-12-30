// types.ts
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  signIn: undefined;
  registration: undefined;
  homeScreen:undefined;
  layout:undefined;
  filter:undefined;
  viewMessage:undefined;
  notifications:undefined;
  editProfile:undefined;
  termsAndConditions:undefined;
  
};

export type AllNavigationProps = NativeStackNavigationProp<
  RootStackParamList
>;

export type NavigateProps = {
  navigation: AllNavigationProps;
};
