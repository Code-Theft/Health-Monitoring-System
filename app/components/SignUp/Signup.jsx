import { React, useEffect, useRef, useState } from "react";
import { Button, View, Text, StyleSheet, Pressable, KeyboardAvoidingView, Alert } from "react-native";
// import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-paper';
import styles from './css1';
import { auth, db } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
    snapshotEqual,
    onSnapshot,
} from "firebase/firestore";

export default function SignUp({ navigation }) {
    //Poppins Font
    // const [fontsLoaded] = useFonts({
    //     'Plight': require('../../assets/fonts/Poppins-Light.ttf'),
    //     'Pregular': require('../../assets/fonts/Poppins-Regular.ttf'),
    //     'Pmed': require('../../assets/fonts/Poppins-Medium.ttf'),
    // });

    const [isAccIn, setIsAccIn] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    const [name, setName] = useState('');
    const [isValidName, setIsValidName] = useState(true);

    const [contact, setContact] = useState('');
    const [isValidSecContact, setIsValidSecContact] = useState(true);

    const [secContact, setSecContact] = useState('');
    const [isValidContact, setIsValidContact] = useState(true);

    const [age, setAge] = useState('');
    const [isValidAge, setIsValidAge] = useState(true);

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValidEmail(true); // Reset validation on each input change
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsValidPassword(true); // Reset validation on each input change
    };

    const handleNameChange = (text) => {
        setName(text);
        setIsValidName(true); // Reset validation on each input change
    };
    const handleAgeChange =(text) =>{
        setAge(text);
        setIsValidAge(true);
    };
    const handleContactChange =(text) => {
        setContact(text);
        setIsValidContact(true);
    };
    const handleSecContactChange =(text) => {
        setSecContact(text);
        setIsValidSecContact(true);
    };

    const registerWithEmailAndPassword = async (name, email, password, contact, secContact, age) => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;
        const ageRegex = /^(?:[1-9]|[1-9][0-9])$/;
        const mobileNumberRegex = /^\d{10}$/;
     
        if((name.trim() ===''))
        {
            setIsValidName(false);
            Alert.alert('Error', 'Please enter a valid name');
        }

        if ((email.trim() === '') || (!emailRegex.test(email))) {
            setIsValidEmail(false);
            Alert.alert('Error', 'Please enter a valid email');

            return;
        }
        if ((password.trim() === '') || (!passwordRegex.test(password)) ) {
            setIsValidPassword(false);
            Alert.alert('Error', 'Please enter a valid password');
            return;
        }
        if ((age.trim() ==='') || (!ageRegex.test(age))) {
            setIsValidAge(false);
            Alert.alert('Error', 'Please enter a valid Age');
            return;
        }
        if ((contact.trim() ==='') || (!mobileNumberRegex.test(contact))) {
            setIsValidContact(false);
            Alert.alert('Error', 'Please enter a valid Mobile Number');
            return;
        };
        if ((secContact.trim() ==='') || (!mobileNumberRegex.test(contact))) {
            setIsValidSecContact(false);
            Alert.alert('Error', 'Please enter a valid Secondary Mobile Number');
            return;
        };

        try {


            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
                contact, secContact, age
            })
                .then((re) => {
                    setIsAccIn(true);
                })
        } catch (err) {
            console.error(err);
            if(err.code ==='auth/email-already-in-use')
            {
                Alert.alert("Alert","Email already in use. Please Login");
                navigation.navigate('Otp')
            }
            // alert(err.message);
        }
        if (isAccIn === true) {
            navigation.navigate('AccountCreated');
            console.log("Account work ayyi;");
        }
    };

    return (
        <View style={styles.flexContainer}>
            <View style={styles.welcomeTEX2}>
                {/* <Text style={styles.welcomeH3}>Signed In</Text> */}
                <Text>
                    <Text style={styles.welcomeH1}>Sign </Text>
                    <Text style={styles.welcomeH1green}>Up </Text>
                </Text>
                <Text style={styles.welcomeCaption}>Create an account to get started.</Text>
            </View>



            <KeyboardAvoidingView style={styles.formStl}>

                <TextInput
                    // secureTextEntry
                    mode="outlined"
                    label="Name1"
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={handleNameChange }
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    style={styles.input}
                    left={<TextInput.Icon icon="account" />}
                />
                <TextInput
                    // secureTextEntry
                    mode="outlined"
                    label="E-Mail"
                    placeholder="Enter your E-Mail"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    value={email}
                    onChangeText={handleEmailChange}
                    style={styles.input}
                    left={<TextInput.Icon icon="email" />}
                />
                <TextInput
                    // secureTextEntry
                    mode="outlined"
                    label="Age"
                    placeholder="Enter your Age"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    value={age}
                    onChangeText={handleAgeChange }
                    style={styles.input}
                    left={<TextInput.Icon icon="calendar-blank" />}
                // right={<TextInput.Icon icon="calendar-blank" />}
                />

                <TextInput
                    // secureTextEntry
                    mode="outlined"
                    label="Contact"
                    placeholder="Enter your Contact number"
                    textColor="#4d4d4d"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    value={contact}
                    onChangeText={handleContactChange }
                    style={styles.input}
                    left={<TextInput.Icon icon="account-box" />}
                />
                <TextInput
                    // secureTextEntry
                    mode="outlined"
                    label="Secondary Contact"
                    placeholder="Enter your Emergency contact"
                    textColor="#4d4d4d"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    value={secContact}
                    onChangeText={handleSecContactChange}
                    style={styles.input}
                    left={<TextInput.Icon icon="account-box" />}
                />
                <TextInput
                    // secureTextEntry
                    mode="outlined"
                    label="Password"
                    placeholder="Password"
                    textColor="#4d4d4d"
                    outlineColor="#4d4d4d"
                    activeOutlineColor="#32B868"
                    value={password}
                    onChangeText={handlePasswordChange}
                    style={styles.input}
                    left={<TextInput.Icon icon="account-box" />}
                />
                <View style={styles.butContain}>
                    <Pressable
                        style={styles.getstartBut}
                        // onPress={() => navigation.navigate('Otp')}
                        onPress={async () => {
                            await registerWithEmailAndPassword(name, email, password, contact, secContact, age);

                        }}
                    // onPress={handleSubmit}
                    >
                        <Text style={styles.getstartButex}>Create Account</Text>
                    </Pressable>


                </View>
            </KeyboardAvoidingView>

            {/* -------------  Button Container  -------------- */}
            {/* <View style={styles.bottomSpace}>


            </View> */}
        </View>


    );
}