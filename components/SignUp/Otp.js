import { React, useEffect, useRef, useState } from "react";
import { Button, View, Text, StyleSheet, Pressable, Card ,Alert,ActivityIndicator} from "react-native";

import { TextInput, IconButton, } from 'react-native-paper';

import styles from './css1';

// Firebase
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getActionFromState } from "@react-navigation/native";



export default function Otp({ navigation }) {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValidEmail(true); // Reset validation on each input change
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsValidPassword(true); // Reset validation on each input change
    };

    const logInWithEmailAndPassword = async (email, password) => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        

        if ((email.trim() === '') || (!emailRegex.test(email))) {
            setIsValidEmail(false);
            Alert.alert('Error', 'Please enter a valid email');

            return;
        }
        if (password.trim() === '')  {
            setIsValidPassword(false);
            Alert.alert('Error', 'Password cannot be empty');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((re) => {
                    console.log(re);
                    setIsSignedIn(true);
                });
            if (isSignedIn === true) {
                navigation.navigate('HomeApp');

            }

        } catch (err) {
            Alert(err.message);
        }

    };

    // const [fontsLoaded] = useFonts({
    //     'Plight': require('../../assets/fonts/Poppins-Light.ttf'),
    //     'Pregular': require('../../assets/fonts/Poppins-Regular.ttf'),
    //     'Pmed': require('../../assets/fonts/Poppins-Medium.ttf'),
    // });
    // if (!fontsLoaded) {
    //     return null;
    // }
    return(
        <View style={styles.centeredFlex}>
            <View style={styles.centerDIv}>
                <IconButton
                    icon="lock-check"
                    iconColor="#32B868"
                    size={120} />
                <Text>
                    <Text style={styles.welcomeH1}>User </Text>
                    <Text style={styles.welcomeH1green}>Login</Text>
                </Text>
                <Text style={styles.welcomeCaption1}>Login with your email and Password </Text>


            </View>
            <View style={styles.formSt2}>
                <TextInput
                    // secureTextEntry
                    mode="flat"
                    placeholder="Email"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmailChange}
                    left={<TextInput.Icon icon="account" />}
                    keyboardType={'email-address'}
                />
                
            </View>
            <View style={styles.formSt2}>
                <TextInput
                    // secureTextEntry
                    mode="flat"
                    placeholder="Password"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    keyboardType={'default'}
                    secureTextEntry={true}

                    left={<TextInput.Icon icon="eye" />}
                />
            </View>


            {/* -------------  Button Container  -------------- */}
            <View >
                <Pressable
                    style={styles.getstartBut}
                    // onPress={() => navigation.navigate('OtpVerifed')}

                    onPress={async () => {
                        
                        await logInWithEmailAndPassword(email, password);

                    }}
                // onPress={() => FormValiate()}
                >
                    <Text style={styles.getstartButex}>Login</Text>
                </Pressable>


            </View>


        </View>

    );
}

