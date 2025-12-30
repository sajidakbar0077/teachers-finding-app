import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {
  launchImageLibrary,
} from 'react-native-image-picker';
import BoldText from '../../../components/common/BoldText';
import {style} from '../../../styles/Style';
import MainText from '../../../components/common/MainText';
import MainBtn from '../../../components/common/MainBtn';
import {check,PERMISSIONS,request} from "react-native-permissions"
const VerificationScreen: React.FC = () => {
  const [cnicImage, setCnicImage] = useState<string | null>(null);
  const [degreeImage, setDegreeImage] = useState<string | null>(null);


  const handleImagePicker = async (
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const isGranted = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    
    if (isGranted === 'granted') {
      const options = {
        mediaType: 'photo' as const,
      };
  
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri || null);
        }
      });
    } else {
      const status = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
  
      if (status === 'granted') {
        const options = {
          mediaType: 'photo' as const,
        };
  
        launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorMessage) {
            console.error('ImagePicker Error:', response.errorMessage);
          } else if (response.assets && response.assets.length > 0) {
            setImage(response.assets[0].uri || null);
          }
        });
      } else {
        console.warn('Permission not granted');
      }
    }
  };
  

  return (
    <ScrollView>
      <View style={style.loginHeader}>
        <BoldText style={style.mainHeading}>Verify Yourself!</BoldText>
      </View>
      <View contentContainerStyle={style.wrapper}>
        <MainText style={{fontSize: 16}}>CNIC Photo</MainText>

        <TouchableOpacity
          style={style.imageBtn}
          onPress={() => handleImagePicker(setCnicImage)}>

        {cnicImage && (
          <Image
            source={{uri: cnicImage}}
            style={{width: '100%', height: 200, marginVertical: 10,objectFit:"contain"}}
          />
        )}

       {
          cnicImage?<Image
          source={require('../../../assets/images/uploadImage.png')}
          style={style.smallUploadIcon}
        />: <Image
           source={require('../../../assets/images/uploadImage.png')}
           style={{width: 32, height: 32}}
         />
       }


        </TouchableOpacity>



        <MainText style={{fontSize: 16}}>
          Highest Degree/Certificate Photo
        </MainText>
               <TouchableOpacity
          style={style.imageBtn}
          onPress={() => handleImagePicker(setDegreeImage)}>

        {degreeImage && (
          <Image
            source={{uri: degreeImage}}
            style={{width: '100%', height: 200, marginVertical: 10,objectFit:"contain"}}
          />
        )}

       {
          degreeImage?<Image
          source={require('../../../assets/images/uploadImage.png')}
          style={style.smallUploadIcon}
        />: <Image
           source={require('../../../assets/images/uploadImage.png')}
           style={{width: 32, height: 32}}
         />
       }


        </TouchableOpacity>

        <MainBtn btnText="Verify" />
      </View>
    </ScrollView>
  );
};

export default VerificationScreen;
