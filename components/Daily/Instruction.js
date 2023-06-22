import { React, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking, Platform } from "react-native";
import styles from './../SignUp/css1';
import { useNavigation } from '@react-navigation/native';
import { Appbar, List } from 'react-native-paper';
import ProfFoot from "./ProfFoot";
import ProfReport from "./ProfReport";








export default function Instruction({ navigation }) {


    return (
        <View style={styles.flexContainer}>



            <View style={styles.welcomeTEX}>
                <View style={styles.CommTitle}>

                    <Text>
                        <Text style={styles.welcomeH1}>Instructions</Text>
                        <Text style={styles.welcomeH1green}>!</Text>
                    </Text>
                    <Text style={styles.welcomeCaption2}>Kindly read the instruction before you start !</Text>
                </View>


                <View style={styles.Black}>
                    <List.Item
                        title="ECG"
                        description="Place the probs here for accurate readings "
                        left={props => <List.Icon {...props} icon="heart" />}
                    />
                    <List.Subheader>Red : RA (right arm)</List.Subheader>
                    <List.Subheader>Yellow: LA(left arm)</List.Subheader>
                    <List.Subheader>Green: RL(right leg)</List.Subheader>

                    <List.Item
                        title="LM 35"
                        description="Hold the sensor covering both the side "
                        left={props => <List.Icon {...props} icon="temperature-celsius" />}
                    />
                    <List.Item
                        title="MAX30102"
                        description="Place your finger in the IR sensor for accurate reading"
                        left={props => <List.Icon {...props} icon="molecule" />}
                    />
                </View>


            </View>

            <View style={styles.butContain}>
                <Pressable
                    style={styles.getstartBut}
                    onPress={() => navigation.navigate("Reading")}
                >
                    <Text style={styles.getstartButex}>Start Checking</Text>
                </Pressable>


            </View>




        </View>
    )
}
