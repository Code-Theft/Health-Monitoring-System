import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';

export default function ProfileHero() {
    const styles = StyleSheet.create({
        Fcontainer: {
            flex: 1,
            height:500,
            
        },
        profileHero: {
            backgroundColor: '#32B868',
            flex: 4,
            

        },
        profileCont: {
            flex: 2,
            backgroundColor: '#4d4d4d',
        },
    });
    return (

        <View style={styles.Fcontainer}>

            <View style={styles.profileHero}>
                <Text>Hi</Text>
            </View>
            <View style={styles.profileCont}>
                <Text>Hello </Text>
            </View>
        </View>
    );
}