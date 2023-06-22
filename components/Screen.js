import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  const styles = StyleSheet.create({

    appbarr: {
      backgroundColor: '#ffff00',

      height: 500,
    }
  });
  return (

    <NavigationContainer style={styles.appbarr}>
      <Stack.Navigator initialRouteName="HomeApp">
        {/* ------Sign Up Routes */}

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUppage1" component={SignUppage1} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        {/* <Stack.Screen name="OtpVerifed" component={OtpVerifed} options={{ headerShown: false }} /> */}
        <Stack.Screen name="AccountCreated" component={AccountCreated} options={{ headerShown: false }} />


        {/* ------Home App Routes */}
        <Stack.Screen name="HomeApp" component={HomeApp} options={{ headerShown: false }} />
      




      </Stack.Navigator>

    </NavigationContainer >
  );
}







