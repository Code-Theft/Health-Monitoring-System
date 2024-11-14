import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking } from "react-native";
import { useFonts } from 'expo-font';
import { Divider, DataTable, Button, Avatar, Card, IconButton, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



import styles from '../SignUp/css1';
// Firebase
import { auth, db } from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";



export default function ProfFoot()
{
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const navigation = useNavigation();
    const logout = async () => {
        await signOut(auth)
            .then(() => {
                console.log("Logging Out Success");
                setIsLoggedOut(true);

            });
        if (isLoggedOut === true) {

            navigation.navigate('Otp');
        }
    };

    const emaill = () => {
        Linking.openURL('mailto:support@hms.dev');
    };
    return(
     
         <View style={styles.butContain}>
         <DataTable>


             <DataTable.Row>
                 <DataTable.Cell>
                     <Button icon="face-agent" mode="outlined" onPress={() => emaill()} textColor="#666"  >
                         Support
                     </Button>
                 </DataTable.Cell>


             </DataTable.Row>
             <DataTable.Row>
                 <DataTable.Cell>
                     <Button icon="logout" mode="text" style={styles.profileDash} textColor="#666" buttonColor="#59F397" onPress={() => logout()}>
                         Log Out
                     </Button>
                 </DataTable.Cell>


             </DataTable.Row>



         </DataTable>

     </View>
    );
}