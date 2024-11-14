import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking } from "react-native";
import { useFonts } from 'expo-font';
import { Divider, DataTable, Button, Avatar, Card, IconButton, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



import styles from '../SignUp/css1';


export default function ProfReport()
{
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const navigation = useNavigation();
    const LoadReport = async () => {
        await signOut(auth)
            .then(() => {
                console.log("Logging Out Success");
                setIsLoggedOut(true);

            });
        if (isLoggedOut === true) {

            navigation.navigate('Otp');
        }
        navigation.navigate('HMSReport');
    };

    const emaill = () => {
        Linking.openURL('mailto:support@hms.dev');
    };
    return(
        
        <View style={styles.welcomeTEX}>

                <Card.Title
                    title="HMS Report"
                    // subtitle="Measure your body temperature"
                    left={(props) => <Avatar.Icon {...props} icon="chart-bar" style={styles.green} />}
                    right={(props) => <IconButton {...props} icon="download" onPress={() => { navigation.navigate('HMSReport'); }} />}
                />
                <Card.Title
                    title="Survey Report"
                    // subtitle="Measure your body temperature"
                    left={(props) => <Avatar.Icon {...props} icon="script-text" style={styles.green} />}
                    right={(props) => <IconButton {...props} icon="download" onPress={() => { }} />}
                />

            </View>
    );
}