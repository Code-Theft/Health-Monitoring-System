import React from "react";
import { Button, View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, KeyboardAvoidingView } from "react-native";

import styles from './css1';

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
        <View style={styles.flexContainer}>
            {/* ----------------- Hero Image --------------*/}

            <View style={styles.greenBox1}>
                <Image
                    style={styles.greenBoxImg2}
                    source={require('../../assets/signup1.jpg')} />

            </View>


            {/* ---------------- Landing Body Section ------------- */}

            <View style={styles.welcomeTEX1}>

                <Text style={styles.signupp1}>
                    <Text style={styles.welcomeH1}>You are </Text>
                    <Text style={styles.welcomeH1green}>ready </Text>
                    <Text style={styles.welcomeH1}>to go !</Text>
                </Text>
                <Text style={styles.signupp1}>
                    <Text style={styles.welcomeCaption}>Thanks for your time to create account
                        {"\n"} with us. Let’s explore the app</Text>
                </Text>


            </View>
            {/* -------------  Button Container  -------------- */}
            <View style={styles.butContain}>
                <Pressable
                    style={styles.getstartBut}
                    onPress={() => navigation.navigate('SignUp')} >
                    <Text style={styles.getstartButex}>Sign Up</Text>
                </Pressable>
                <Text style={{ paddingTop: 10 }}>
                    <Text style={styles.getstartButCap}>Already have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate('Otp')} >
                        <Text style={styles.getstartButCapgreen}>Sign in</Text>
                    </Pressable>
                </Text>
            </View>

        </View>


    );
}