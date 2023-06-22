import React from "react";
import { Button, View, Text, StyleSheet, Pressable, Card } from "react-native";
// import { useFonts } from 'expo-font';
import { TextInput, IconButton, MD3Colors } from 'react-native-paper';
import styles from './css1';

const number = "8078058944";
const styles1 = StyleSheet.create({

    centerOTP: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    centerDIv:
    {
        justifyContent: "center",
        alignItems: "center",
    },

    welcomeH3: {
        fontSize: 22,
        color: '#4d4d4d',
        fontFamily: 'Pregular',
        fontWeight: 500,
        paddingBottom: 15,
    },
    welcomeH1: {
        fontSize: 38,
        color: '#1a1a1a',
        fontFamily: 'Pmed',
        fontWeight: 600,
    },
    welcomeH1green: {
        fontSize: 38,
        color: '#32B868',
        fontFamily: 'Pmed',
        fontWeight: 600,
    },
    welcomeCaption: {
        paddingTop: 0,
        fontSize: 18,
        fontFamily: 'Plight',
        fontWeight: 200,
        color: '#4d4d4d',
        width: 300,
        textAlign: 'center'
    },
    butContain: {
        alignItems: 'center',
        justifyContent: 'center',


    },
    getstartBut: {

        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 15,
        elevation: 1,
        backgroundColor: '#32B868',
        alignItems: 'center',
        justifyContent: 'center',
    },
    getstartButex: {
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Pregular',
        fontSize: 22,
        lineHeight: 27,
        letterSpacing: 0.25,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {

        color: '#4d4d4d',
        fontFamily: 'Plight',
        // borderWidth: 1,
        borderColor: '#32B868',
        marginTop: 20,
        borderRadius: 15,
    },
    formStl: {
        // borderWidth:3,
        padding: 30,
        margin: 20,


    },
    resenD: {
        paddingTop: 20,
        color: '#32B868',
        fontSize: 25,
        fontFamily: 'Pmed',
    },




});

export default function OtpVerifed({ navigation }) {
    //Poppins Font
    // const [fontsLoaded] = useFonts({
    //     'Plight': require('../../assets/fonts/Poppins-Light.ttf'),
    //     'Pregular': require('../../assets/fonts/Poppins-Regular.ttf'),
    //     'Pmed': require('../../assets/fonts/Poppins-Medium.ttf'),
    // });
    // if (!fontsLoaded) {
    //     return null;
    // }



    // Styling


    return (
        <View style={styles.centeredFlex}>
            <View style={styles.centerDIv}>
                <IconButton
                    icon="shield-check"
                    iconColor="#32B868"
                    size={120} />
                <Text>
                    <Text style={styles.welcomeH1}>OTP </Text>
                    <Text style={styles.welcomeH1green}>Verification </Text>
                </Text>
                <Text style={styles.welcomeCaption1}>
                    <Text>Enter the OTP sent to</Text>
                    <Text style={styles.boldText}> {number}</Text>
                </Text>
            </View>
            <View style={styles.formSt3}>
                <TextInput
                    // secureTextEntry
                    mode="flat"
                    placeholder="OTP"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    style={styles.input}
                // left={<TextInput.Icon icon="account" />}
                />
                <Text style={styles.resenD}>Resend OTP</Text>
            </View>


            {/* -------------  Button Container  -------------- */}
            <View >
                <Pressable
                    style={styles.getstartBut}
                    onPress={() => navigation.navigate('HomeApp')} >
                    <Text style={styles.getstartButex}>Verify</Text>
                </Pressable>

            </View>

        </View>








    );
}