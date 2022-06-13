import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../login/index';

// class Head extends React.Component {
//     render() {
//         return (
//             <View style={styles.headerContainer}>
//                 <Text style={styles.textStyle}> Domate </Text>
//             </View>
//         )
//     }
// }

export default function Head({navigation}){
    const sair = () => {
        AsyncStorage.clear("userdata")
        AsyncStorage.getItem('userdata')
        console.log(AsyncStorage.getItem('userdata'))

    }

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textStyle}> Domate </Text>
            <TouchableOpacity onPress={() => {navigation.goBack()} }>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#FF5D6C",
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 5,
        position: "relative",
        borderColor: "#000",
        borderWidth: 1,
    },
    textStyle: {
        color: "black",
        fontSize: 30,
        fontWeight: "800",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 0
    }
})

// export default Head;