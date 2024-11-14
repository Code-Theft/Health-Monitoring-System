import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking } from "react-native";

import { Divider, DataTable, Button, Avatar, Card, IconButton, Switch, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './../SignUp/css1';

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
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;



export default function DailyReading() {
    const navigation = useNavigation();

    const [tempData, setTempData] = useState(100);
    const [dataObject, setDataObject] = useState(Array(20).fill(0));
    const [maxHr, setMaxHr] = useState(0);




    const pushFire = async () => {
        try {
            const currentUser = auth.currentUser;
            console.log("Current User: ", currentUser);
            // const userRef = db.collection("userData").doc(currentUser.uid);
            const currentDate = new Date();

            // Extract temperature value and convert to number
            const temperature = parseFloat(tempData.Celcius);

            if (!isNaN(maxHr)) {
                await addDoc(collection(db, "ECG"), {
                    temperature: temperature,
                    date: currentDate.toLocaleDateString(),
                    time: currentDate.toLocaleTimeString(),
                    uid: currentUser.uid,
                });

                console.log('ECG data pushed to Firestore successfully');
                Alert.alert("Data Updated to Database");
        navigation.navigate('HomeApp');

                

            } else {
                console.log('Invalid temperature data');
            }
        } catch (error) {
            console.error("Error pushing temperature data to Firestore:", error);
        }
    };




    useEffect(() => {



        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.185.174:8087/ecg');
                const data = await response.json();
                setTempData(data);
                console.log(data);

                setDataObject((prevData) => {
                    const newDataObject = { ...prevData };
                    const iteration = Object.keys(newDataObject).length + 1;
                    newDataObject[iteration] = data.value;

                    const hr = parseFloat(data.hr);
                    if (!isNaN(hr)) {
                        setMaxHr((prevMaxHr) => Math.max(prevMaxHr, hr));
                    }

                    return newDataObject;
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        let fetchCount = 0;
        const interval = setInterval(() => {
            fetchData();
            fetchCount++;

            if (fetchCount >= 20) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const data = {
        labels: Object.keys(dataObject),
        datasets: [
            {
                data: Object.values(dataObject),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 1
            }
        ],
        legend: ["ECG Reading"]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 1,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };


    return (


        <View style={styles.flexContainer} >



            <View style={styles.welcomeTEX}>

                <View style={styles.SubVV}>
                    {/* <CircularProgress/> */}
                    <Text style={styles.subVVH1}>ECG Reading</Text>

                    <Text style={styles.ecg}></Text>
                    <Text style={styles.ecg}>Heart Rate : {maxHr.toFixed(2)}</Text>

                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                    />

                </View>



            </View>
            <View style={styles.butContain}>
                <Pressable
                    style={styles.getstartBut}
                    // onPress={() => navigation.navigate("ReadEcg")}
                    onPress={pushFire}
                >
                    <Text style={styles.getstartButex}>Check Next</Text>
                </Pressable>


            </View>
        </View>


    )
}
