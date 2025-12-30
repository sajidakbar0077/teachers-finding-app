import {View, Text, ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SendingMessage from '../../components/common/SendingMessage';
import { NavigateProps } from '../../types/NavigationTypes';
import MainText from '../../components/common/MainText';

const ViewMessage:React.FC<NavigateProps> = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#3D8FEF',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            paddingVertical: 14,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomEndRadius: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
          
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image source={require('../../assets/images//BackWhiteArrow.png')} />
          </TouchableOpacity>

            <Image
              source={require('../../assets/images//PersonOne.png')}
              style={{width: 36, height: 36}}
            />
           <MainText style={{color: '#ffffff', fontSize: 20, fontWeight: '600'}}>
              Kalim
           </MainText>
          </View>
          <View>
            <Image source={require('../../assets/images//CallingIcon.png')} />
          </View>
        </View>
      </View>

      <View style={{paddingTop: 25, paddingHorizontal: 15}}>
        <View
          style={{
            backgroundColor: '#254E7E0D',
            minHeight: 500,
            borderRadius: 20,
            padding:10,
            paddingTop:20
          }}>
          <View style={style.opponetsMsg}>
           <MainText>Hello Kalim Can You find the feature Here</MainText>
          </View>
          <View style={style.myMessage}>
           <MainText style={style.myMessageText}>Hello Kalim Can You find the feature Here</MainText>
          </View>
        </View>
       
          {/* Send Message Component  */}
        <SendingMessage/>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  opponetsMsg: {
    maxWidth: 300,
    padding: 10,
    backgroundColor: '#254E7E17',
    borderBottomLeftRadius:7,
    borderRadius:20,
    marginVertical:10
  },
  myMessage: {
    maxWidth: 300,
    padding: 10,
    backgroundColor: '#4A90E2',
    borderBottomRightRadius:7,
    borderRadius:20,
    marginLeft:"auto"
  },
  myMessageText:{
    color:"white"
  }
});

export default ViewMessage;
