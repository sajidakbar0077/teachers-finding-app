import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/Auth/SignIn";
import Registration from "./src/screens/Auth/Registration";
import { style } from "./src/styles/Style";
import Layout from "./src/screens/layout/Layout";
import Filter from "./src/screens/Filter/Filter";
import ViewMessage from "./src/screens/ViewChat/ViewMessage";
import NotificationScreen from "./src/screens/Notification/NotificationScreen";
import EditProfile from "./src/screens/TeacherScreens/EditProfile/EditProfile";
import TermsAndCondition from "./src/screens/termsAndConditions/TermsAndConditions";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: style.mainBg,headerShown:false }} >
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="filter" component={Filter} />
        <Stack.Screen name="viewMessage" component={ViewMessage} />
        <Stack.Screen name="notifications" component={NotificationScreen} />
        <Stack.Screen name="editProfile" component={EditProfile} />
        <Stack.Screen name="termsAndConditions" component={TermsAndCondition} />
        <Stack.Screen name="notification" component={NotificationScreen} />
        <Stack.Screen name="layout" component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
