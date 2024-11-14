import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Navigation Routes
import HomeScreen from "./components/SignUp/Homescreen";
import SignUppage1 from "./components/SignUp/signuppg1";
import SignUp from "./components/SignUp/Signup";
import Otp from "./components/SignUp/Otp";
import OtpVerifed from "./components/SignUp/OtpVerifed";
import AccountCreated from "./components/SignUp/Phone";

// Home App Routes
import HomeApp from "./components/Home/HomeApp";
import Profile from "./components/Home/Profile";
import MainPage from "./components/Home/MainPage";

import INSRoute from "./components/Daily/INSRoute";
import Instruction from "./components/Daily/Instruction";
import DailyReading from "./components/Daily/DailyReading";
import ReadEcg from "./components/Daily/ReadEcg";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* ------Sign Up Routes */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUppage1" component={SignUppage1} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
        {/* <Stack.Screen name="OtpVerifed" component={OtpVerifed} /> */}
        <Stack.Screen name="AccountCreated" component={AccountCreated} />

        {/* ------Home App Routes */}
        <Stack.Screen name="HomeApp" component={HomeApp} />
        <Stack.Screen name="INSRoute" component={INSRoute} />
        <Stack.Screen name="Instruction" component={Instruction} />
        <Stack.Screen name="Reading" component={DailyReading} />
        <Stack.Screen name="ReadEcg" component={ReadEcg} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
