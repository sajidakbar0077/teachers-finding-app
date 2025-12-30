import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import NotificationCard from '../../components/common/NotificationCard';
import MainText from '../../components/common/MainText';
import BoldText from '../../components/common/BoldText';
import TitleText from '../../components/common/TitleText';
import { NavigateProps } from '../../types/NavigationTypes';

const NotificationScreen:React.FC<NavigateProps> = ({navigation}) => {
  return (
    <View style={{padding: 14}}>
      <View style={{marginBottom:20,display:"flex",flexDirection:"row",gap:10,alignItems:"center"}} >
       <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Image source={require("../../assets/images/BlackBackArrow.png")}/>
       </TouchableOpacity>
        <TitleText>Notification</TitleText>
      </View>

      <NotificationCard
        message=" Your session with Mr. Ali for Mathematics has been rescheduled to October 1, 3 PM."
        time="3 days ago"
        imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <NotificationCard
        message=" Your session with Mr. Ali for Mathematics has been rescheduled to October 1, 3 PM."
        time="3 days ago"
        imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <NotificationCard
        message=" Your session with Mr. Ali for Mathematics has been rescheduled to October 1, 3 PM."
        time="3 days ago"
        imageUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </View>
  );
};

export default NotificationScreen;
