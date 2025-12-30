import { View, Text, ScrollView, Pressable,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MainBtn from '../../../components/common/MainBtn';
import BoldText from '../../../components/common/BoldText';
import { style } from '../../../styles/Style';
import MainText from '../../../components/common/MainText';
import { NavigateProps } from '../../../types/NavigationTypes';

const ProfileSettingScreen:React.FC<NavigateProps> = ({navigation}) => {

    function profileNavs(pageName:string){
        switch(pageName){
            case "edit":
                navigation.navigate("editProfile")
                break;
            case "notification":
                navigation.navigate("notifications")
                break;
            case "terms":
                navigation.navigate("termsAndConditions")
                break;
        }
    }

  return (
    <ScrollView style={{padding: 14, height: '100%'}}>
      <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <BoldText style={style.pageTitle}>Profile</BoldText>
        </View>
          
  <View style={{ width: '100%', padding: 25, elevation: 5,backgroundColor:'white', marginVertical: 100, borderRadius: 10 }}>
  <View
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: -120,
      zIndex: 10,
    }}
  >
    <TouchableOpacity style={[style.profileEditCircle, { paddingVertical: 0,borderWidth:0}]}>
     <View style={{width:120,height:120,borderRadius:100,overflow:"hidden"}}>
     <Image source={require("../../../assets/images/tutors.png")} style={{width:120,height:120}}/>
     </View>
    </TouchableOpacity>

  
    <View style={{ marginVertical: -15 }}>
      <BoldText style={{ textAlign: 'center', fontSize: 24 }}>Kalim Ullah</BoldText>
      <Text style={{ textAlign: 'center', color: '#545454', fontSize: 13, fontWeight: '700' }}>
        m.kalimullah590@gmail.com
      </Text>
    </View>
  </View>

    <TouchableOpacity style={style.profileMenuBtn} onPress={()=>profileNavs("edit")}>
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
       <Image source={require("../../../assets/images/user.png")}/>
      <BoldText style={style.profileMenuBtnText}>Edit Profile</BoldText>
     </View>
      <Image source={require("../../../assets/images/rightArrow.png")}/>
    </TouchableOpacity>

    <TouchableOpacity style={style.profileMenuBtn} onPress={()=>profileNavs("notification")}>
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
       <Image source={require("../../../assets/images/bill.png")}/>
      <BoldText style={style.profileMenuBtnText}>Notifications</BoldText>
     </View>
      <Image source={require("../../../assets/images/rightArrow.png")}/>
    </TouchableOpacity>

    <TouchableOpacity style={style.profileMenuBtn}>
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
       <Image source={require("../../../assets/images/eye.png")}/>
      <BoldText style={style.profileMenuBtnText}>Dark Mode</BoldText>
     </View>
      <Image source={require("../../../assets/images/rightArrow.png")}/>
    </TouchableOpacity>

    <TouchableOpacity style={style.profileMenuBtn} onPress={()=>profileNavs("terms")} >
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
       <Image source={require("../../../assets/images/terms.png")}/>
      <BoldText style={style.profileMenuBtnText}>Terms And Conditions</BoldText>
     </View>
      <Image source={require("../../../assets/images/rightArrow.png")}/>
    </TouchableOpacity>

    <TouchableOpacity style={[style.profileMenuBtn,{marginTop:30}]}>
     <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
       <Image source={require("../../../assets/images/off.png")}/>
      <BoldText style={style.profileMenuBtnText}>Log Out</BoldText>
     </View>
      <Image source={require("../../../assets/images/rightArrow.png")}/>
    </TouchableOpacity>


</View>

     
         
      
    </ScrollView>
  )
}

export default ProfileSettingScreen