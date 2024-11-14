import React from "react";
import { Button, View, StyleSheet, Image, Alert, ImageBackground, Pressable } from "react-native";

import { BottomNavigation, Text } from 'react-native-paper';
import styles from './css1';

export default function HomeScreen({ navigation }) {
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
            <View style={styles.greenBox}>
                <View style={styles.imageCont}>
                    <Image
                        style={styles.greenBoxImg}
                        source={require('../../assets/get_started1.png')} />

                </View>
            </View>

            {/* ---------------- Landing Body Section ------------- */}

            <View style={styles.welcomeTEX}>
                <Text style={styles.welcomeH3}>Welcome to</Text>
                <Text>
                    <Text style={styles.welcomeH1green}>H</Text>
                    <Text style={styles.welcomeH1}>ealth </Text>
                </Text>
                <Text>
                    <Text style={styles.welcomeH1green}>M</Text>
                    <Text style={styles.welcomeH1}>onitoring</Text>
                </Text>
                <Text>
                    <Text style={styles.welcomeH1green}>S</Text>
                    <Text style={styles.welcomeH1}>ystem</Text>
                </Text>
                <Text style={styles.welcomeCaption}>A complete health care application to monitor your daily vitals.</Text>

            </View>
            {/* -------------  Button Container  -------------- */}
            <View style={styles.butContain}>
                <Pressable
                    style={styles.getstartBut}
                    onPress={() => navigation.navigate('SignUppage1')} >
                    <Text style={styles.getstartButex}>Get Started</Text>
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