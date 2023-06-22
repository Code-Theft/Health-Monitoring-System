import { React, useEffect, useRef, useState, useCallback } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking, ActivityIndicator } from "react-native";
import { Divider, DataTable, Button, Avatar, Card, IconButton, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import * as Progress from 'react-native-progress';
import HomeTemp from "../Daily/HomeTemp";

import styles from './../SignUp/css1';
// Firebase





export default function DailyT({ navigation }) {



    // function formatText(progress) {
    //     // Customize the text based on the progress value
    //     return `${Math.round(progress * 100)}%`;
    // }

    return (


        <View style={styles.flexContainer} >



            <View style={styles.greenBoxAppHome}>

                <View style={styles.SubVV}>

                    <Text style={styles.subVVH1}>Good Morning!</Text>



                </View>








            </View>


            {/* ---------------- Landing Body Section ------------- */}

            <View style={styles.welcomeTEXHomeApp}>


                <View style={styles.container1}>
                    <View style={styles.row1}>
                        <View style={styles.card1} >
                            <HomeTemp />
                        </View>
                        <View style={styles.card1} />
                        <View style={styles.card1} />
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.card1} />
                        <View style={styles.card1} />
                        <View style={styles.card1} />
                    </View>

                </View>




            </View>
            {/* -------------  Button Container  -------------- */}
            <View style={styles.butContain}>
                <Pressable
                    style={styles.getstartBut}
                    // onPress={() => navigation.navigate('SignUppage1')} 
                    >
                    <Text style={styles.getstartButex}>Complete Now</Text>
                </Pressable>

            </View>

        </View>
    );
}