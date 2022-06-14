import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class Head extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.textStyle}> Domate </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#800000",
        borderColor: "#000000",
        borderWidth: 1,
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