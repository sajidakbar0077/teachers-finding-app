import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {style} from '../../styles/Style';
import TitleText from '../../components/common/TitleText';
import Carousel from '../../components/common/Carousel';
import MainText from '../../components/common/MainText';
import { NavigateProps } from '../../types/NavigationTypes';

const Home:React.FC<NavigateProps> = ({navigation}) => {
  const subject: string[] = [
    'Computer Science',
    'Maths',
    'Physics',
    'Chemistry',
    'Biology',
    'English Literature',
    'History',
    'Geography',
    'Economics',
    'Psychology',
  ];
  const [categories, setCategories] = useState<string[]>([]);
  function selectSubject(subject: string) {
    setCategories(prevSelected =>
      prevSelected.includes(subject)
        ? prevSelected.filter(item => item !== subject)
        : [...prevSelected, subject],
    );
  }

  return (
    <ScrollView contentContainerStyle={[style.wrapper,{paddingBottom:80}]}>
      {/* header  */}
      <View style={style.homeHeader}>
        <View style={style.homeTitle}>
          <TitleText>Welcome</TitleText>
          <TitleText style={style.highlitedText}>Sajid</TitleText>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={style.notificationBtn} onPress={()=>navigation.navigate("notifications")}>
            <Image source={require('../../assets/images/notification.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{width: 40, height: 40, borderRadius: 100}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TitleText style={[style.homeSubHeading, style.muteText]}>
        Find your best Tutor today!
      </TitleText>

      {/* search box component */}
      <View style={style.searchBox}>
      <Image source={require("../../assets/images/search.png")}/>
     <TextInput style={{width:"70%",padding:0}} placeholder='Find Tutor '  placeholderTextColor={"#ABB7C2"}/>
      <TouchableOpacity style={[style.mainBtn,{borderRadius:100,padding:10}]} onPress={()=>navigation.navigate("filter")}>
        <Image source={require("../../assets/images/filter.png")} style={{width:20,height:20}}/>
      </TouchableOpacity>
    </View>
      {/* carousel component */}
      <Carousel />

      {/* categories */}
      <View style={style.subHeader}>
        <TitleText style={style.subHeading}>Categories</TitleText>
        <TouchableOpacity>
          <TitleText style={[style.subHeading, style.blueText]}>
            See All
          </TitleText>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {subject.map((sub, key) => (
          <Pressable
            key={key}
            style={[
              style.checkBox,
              {backgroundColor: categories.includes(sub) ? '#1A6EFC' : 'white'},
            ]}
            onPress={() => selectSubject(sub)}>
            <TitleText
              style={[
                style.checkBoxText,
                {color: categories.includes(sub) ? 'white' : '#8C8C8C'},
              ]}>
              {sub}
            </TitleText>
          </Pressable>
        ))}
      </ScrollView>

{/* top  tutors */}
<View style={style.subHeader}>
        <TitleText style={style.subHeading}>Our Top Tutors</TitleText>
        <TouchableOpacity>
        <TitleText style={[style.subHeading,style.blueText]}>See All</TitleText>
        </TouchableOpacity>
    </View>

    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",rowGap:20}}>
      
        <View style={style.tutorCard}>
            <Image source={require("../../assets/images/tutors.png")} style={style.tutorCardImage}/>
            <TitleText style={{textAlign:"center",fontSize:15}}>Name</TitleText>
            <MainText style={{textAlign:"center",fontSize:15}}>Subject</MainText>
        </View>
        <View style={style.tutorCard}>
            <Image source={require("../../assets/images/tutors.png")} style={style.tutorCardImage}/>
            <TitleText style={{textAlign:"center",fontSize:15}}>Name</TitleText>
            <MainText style={{textAlign:"center",fontSize:15}}>Subject</MainText>
        </View>


    </View>
    </ScrollView>
  );
};

export default Home;
