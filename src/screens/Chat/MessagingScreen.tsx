import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MessageSearch from '../../components/common/MessageSearch';
import { NavigateProps } from '../../types/NavigationTypes';
import MainText from '../../components/common/MainText';

const MessagingScreen:React.FC<NavigateProps> = ({navigation}) => {

function viewMessage(){
  navigation.navigate("viewMessage")
}

  return (
    <ScrollView style={{backgroundColor: '#3D8FEF', height: '100%'}}>
      <View style={{padding: 14}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}>
         <MainText style={{color: '#ffffff', fontSize: 22, fontWeight: '600'}}>
            Messaging
          </MainText>
        </View>
        {/* Component Of Seaching Mesage  */}
        <MessageSearch />
      </View>

      <View style={styles.MessageBox}>
        <TouchableOpacity onPress={()=>viewMessage()}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
              marginBottom: 10,
            }}>
            <View style={styles.circle}>
              <Image
                source={require('../../assets/images//PersonOne.png')}
                style={styles.image}
              />
            </View>
            <View>
              <View
                style={{
                  width: '88%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
               <MainText
                  style={{color: '#515151', fontSize: 18, fontWeight: '500'}}>
                  Ahmad Khan
               </MainText>
               <MainText
                  style={{color: '#9E9E9E', fontSize: 16, fontWeight: '500'}}>
                  12:00
               </MainText>
              </View>
             <MainText
                style={{
                  color: '#9E9E9E',
                  fontSize: 16,
                  fontWeight: '500',
                  marginTop: 2,
                }}>
                ✓ Make a Message Here with Him.
             </MainText>
            </View>
          </View>
        </TouchableOpacity>

      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MessageBox: {
    width: '100%',
    minHeight: '100%',
    padding: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    height: 200,
    marginTop: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%', // Makes the image cover the circle's size
    height: '100%', // Makes the image cover the circle's size
    resizeMode: 'cover', // Ensures the image is cropped properly if necessary
  },
});
export default MessagingScreen;
