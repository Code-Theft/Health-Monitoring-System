import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking } from "react-native";
// import { useFonts } from 'expo-font';

import { Divider, DataTable, Button, Avatar, Card, IconButton, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ProfFoot from '../Daily/ProfFoot';
import ProfReport from "../Daily/ProfReport";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import styles from './../SignUp/css1';
// Firebase
import { auth, db } from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
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



export default function Profile() {


    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        (async () => {
            await fetchUserData();
        })();




    }, []);


    const fetchUserData = async () => {
        try {
            const uid = auth.currentUser.uid; // Get the current user's UID
            console.log("Working:", uid);
            console.log(typeof (uid));

            if (uid) {
                console.log("Working");
                const colRef = query(collection(db, "users",), where("uid", "==", uid));
                // const colRef = collection(db, 'users');
                await getDocs(colRef)
                // const q = query(colRef, where("approval", "==", "false"));

                onSnapshot(colRef, (snapshot) => {
                    const tasks = [];
                    snapshot.forEach((doc) => {
                        tasks.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    });
                    setData(tasks);
                    

                })
                
            }
            else {
                console.log("No Data....")
            }

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    return !data?<>
    <ActivityIndicator theme={{ colors: { primary: 'green' } }} size="large" style={styles.flexContainer}/>
    </> : ( 
        
   


        <View style={styles.flexContainer}>



            <View style={styles.greenBox}>
                <View style={styles.VvCon}>
                    <View style={styles.SubVV}>
                        <Image
                            style={styles.greenBoxImg1}
                            source={require('../../assets/account.png')}
                            resizeMethod="scale" />
                    </View>


                </View>
                {data.map(row => (
                    <View style={styles.VvCon1} key={row.uid}>
                        <Text style={styles.ProffName}>{row.name}</Text>
                        <Text style={styles.ProffEmail}>{row.email}</Text>
                        <Text style={styles.ProffDate}>
                            <Text>UID : </Text>
                            <Text>{row.uid}</Text>
                        </Text>
                    </View>
                ))}




            </View>


            {/* ---------------- Landing Body Section ------------- */}

          
            <ProfReport/>
            <ProfFoot />


        </View>
    );
}