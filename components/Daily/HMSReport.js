import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking, Platform } from "react-native";
import styles from './../SignUp/css1';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import ProfFoot from "./ProfFoot";
import ProfReport from "./ProfReport";
// import { BarApp } from "./BarChart";



const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]



export default function HMSReport() {

 
    return (
        <View style={styles.flexContainer}>

            <Appbar.Header>
                <Appbar.Content title="HMS Report" />

                <Appbar.BackAction accessibilityLabel='Back'  />
            </Appbar.Header>
            <View style={styles.VvCon}>

                <View style={styles.greenBox}>


                    <View style={styles.SubVV}>
                        <Text>Detailed Report 1</Text>
                    </View>


                </View>




            </View>
            <View style={styles.welcomeTEX}>

                <Text>Hello Myre</Text>
                {/* <BarApp/> */}
            </View>

            {/* ---------------- Landing Body Section ------------- */}
            {/* <ProfReport />
            <ProfFoot /> */}




        </View>
    )
}
