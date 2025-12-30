import { View, Text, Image,Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import MessagingScreen from '../Chat/MessagingScreen';
import ProfileSettingScreen from '../TeacherScreens/ProfileSetting/ProfileSetting';

const Layout = () => {
  const Tab = createBottomTabNavigator();
  const width = Dimensions.get("window").width
  return (
  
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderWidth: 2,
          borderColor: "#0961F5",
          borderRadius: 50,
          position: "absolute",
          width:width-50,
          bottom: 10,
         left:25,
          height: 60, 
            
        },
        tabBarActiveTintColor: '#0961F5',
        tabBarInactiveTintColor: '#B9BCBE',
        tabBarIconStyle: {
         flex:1,
          justifyContent: "center", 
          alignItems: "center", 
          marginBottom:-4   
        },
        tabBarLabelStyle: {
          fontSize: 12, 
          marginBottom:3
        },
        headerShown:false
      }}
    >
      <Tab.Screen 
        name="homeScreen" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <View >
                <Image
              source={
                focused
                  ? require('../../assets/images/homeSelected.png')
                  : require('../../assets/images/home.png')
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="search" 
        component={Home} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => (
            <View>
                <Image
              source={
                focused
                  ? require('../../assets/images/searchMenuSelected.png')
                  : require('../../assets/images/searchMenu.png')
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="chat" 
        component={MessagingScreen} 
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused }) => (
           <View>
             <Image
              source={
                focused
                  ? require('../../assets/images/chatSelected.png')
                  : require('../../assets/images/chat.png')
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
           </View>
          ),
        }}
      />
      <Tab.Screen 
        name="profile" 
        component={ProfileSettingScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
           <View>
             <Image
              source={
                focused
                  ? require('../../assets/images/profileMenuSelected.png')
                  : require('../../assets/images/profileMenu.png')
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
           </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Layout;
