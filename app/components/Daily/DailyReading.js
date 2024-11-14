import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking } from "react-native";

import { Divider, DataTable, Button, Avatar, Card, IconButton, Switch, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './../SignUp/css1';

import ReadEcg from './ReadEcg';
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

export default function DailyReading() {
  const navigation = useNavigation();

  const [tempData, setTempData] = useState(100);


 

  const pushFire = async () => {
    try {
      const currentUser = auth.currentUser;
      console.log("Current User: ", currentUser);
      // const userRef = db.collection("userData").doc(currentUser.uid);
      const currentDate = new Date();

      // Extract temperature value and convert to number
      const temperature = parseFloat(tempData.Celcius);

      if (!isNaN(temperature)) {
        await addDoc(collection(db, "Temp"), {
          temperature: temperature,
          date: currentDate.toLocaleDateString(),
          time: currentDate.toLocaleTimeString(),
          uid: currentUser.uid,
        });

        console.log('Temperature data pushed to Firestore successfully');

        Alert.alert("Data Updated to Database");
        navigation.navigate('ReadEcga');
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
        const response = await fetch('http://192.168.185.174:8087/temp');
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        const data = await response.json();



        setTempData(data);
        console.log(data);

        // Do something with the response data
      } catch (error) {
        console.error('Error:', error);
        // Handle the error
      }
    };


    // Fetch data initially
    fetchData();


  }, []);


  return (


    <View style={styles.flexContainer} >



      <View style={styles.welcomeTEX}>

        <View style={styles.SubVV}>
          {/* <CircularProgress/> */}
          <Text style={styles.subVVH1}>Temperature Reading</Text>

          <Text style={styles.ecg}>{tempData["Celcius"]}</Text>

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
