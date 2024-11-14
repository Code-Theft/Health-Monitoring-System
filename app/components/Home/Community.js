import React from "react";
import { Button, View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable,ScrollView } from "react-native";

import styles from './../SignUp/css1';

import CommunityCards from "../Daily/CommunityCards";

export default function SignUppage1({ navigation }) {
    //Poppins Font
    // const [fontsLoaded] = useFonts({
    //     'Plight': require('../../assets/fonts/Poppins-Light.ttf'),
    //     'Pregular': require('../../assets/fonts/Poppins-Regular.ttf'),
    //     'Pmed': require('../../assets/fonts/Poppins-Medium.ttf'),
    // });
    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
        <ScrollView style={styles.flexContainer}>
            <View style={styles.CommTitle}>

                <Text>
                    <Text style={styles.welcomeH1}>Community</Text>
                    <Text style={styles.welcomeH1green}>!</Text>
                </Text>
                <Text style={styles.welcomeCaption2}>Hi there! How are you today?</Text>
            </View>

            <View style={styles.CommBody} >

                <CommunityCards />
               
            </View>

          



        </ScrollView>


    );
}