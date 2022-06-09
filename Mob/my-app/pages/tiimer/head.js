import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Head extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.textStyle}> Domate </Text>
                <TouchableOpacity onPress={async () => { await AsyncStorage.removeItem('userdata'); navigation.navigate('login')}}>
                    <Text>SAIR</Text>
                </TouchableOpacity>
            </View>

            


        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#a93190",
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 5,
        position: "relative"
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

export default Head;