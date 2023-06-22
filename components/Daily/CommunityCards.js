import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Alert, ImageBackground, Pressable, ScrollView, Linking } from "react-native";
import { Card, Button, Avatar, Text } from "react-native-paper";
import { useFonts } from 'expo-font';

import styles from './../SignUp/css1';




const LeftContent = props => <Avatar.Icon {...props} icon="folder" style={styles.green} />




export default function CommunityCards({ navigation }) {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        (async () => {
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "AWSALB=dVMDIJd+1S4RzxoSCKQSrB54KMhzvx3lP7ZcMb46ktPbw1xhh5TsHxRMguuo/UkajMnACrZb6lrQM3h6vHtt+Su7rHtT/uFrmtj7wCacVtZShtewdwF6zmvCit9R; AWSALBCORS=dVMDIJd+1S4RzxoSCKQSrB54KMhzvx3lP7ZcMb46ktPbw1xhh5TsHxRMguuo/UkajMnACrZb6lrQM3h6vHtt+Su7rHtT/uFrmtj7wCacVtZShtewdwF6zmvCit9R; SSESS32d03caef3258817e52ecb00e5537e64=-35ixtmCx0kCV8dn1F2ygWB-EG1mrrDUyzYlgSt0yCId7hi0");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            let resp = await fetch("https://health.gov/myhealthfinder/api/v3/topicsearch.json", requestOptions);
            let respons = await resp.text();
            const obj = JSON.parse(respons);
            let objj = obj.Result.Resources.Resource;


            // });
            setTopics(objj);

        })();
    }, []);

    return (

        <View>
            <View>

                {topics.map(topic => {

                    return (

                        <Card style={styles.CommCard} key={topic.Id}>
                            <Card.Title title={topic.Title} subtitle={topic.Categories} left={LeftContent} />
                            <Card.Content >
                                <Card.Cover source={{ uri: topic.ImageUrl }} style={styles.CardCoverImg} />
                                <Button 
                                icon="search-web"
                                mode="contained-tonal button" 
                                onPress={() => Linking.openURL(topic.AccessibleVersion)}
                                buttonColor="#E3FDED"
                                textColor="#333"
                               

                                >
                                    Read Out
                                </Button>
                            </Card.Content>
                        </Card>

                    )
                })}
            </View>
        </View>








    );
}