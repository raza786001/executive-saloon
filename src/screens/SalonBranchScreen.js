import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function SalonBranchScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header_Text}>Hi,Sutan Hussain</Text>
                <Text style={styles.header_Text1}>Book what do u love</Text>
            </View >
            <View style={styles.search_container}>
                <View style={styles.searchSection}>
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <TextInput style={styles.search_Text} placeholder='  Search for a service or venue'></TextInput>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    header_container: {
        flex: 0.2,
        backgroundColor: '#FF0000',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60

    },
    header_Text: {
        fontSize: 30,
        marginLeft: '5%',
        marginTop: '10%',
        fontWeight: 'bold',
        color: 'white'
    },
    header_Text1: {
        fontSize: 20,
        marginLeft: '5%',
        color: 'white'

    },
    search_container: {
        marginTop: '-7%',
        flex: 0.1,
        backgroundColor: 'white',
        width: '88%',
        marginLeft: '7%',
        borderRadius: 30

    },
    search_Text: {
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 30
    },
    search_Text1: {
        fontSize: 10,
    },
});