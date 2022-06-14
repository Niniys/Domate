import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class timerDis extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    {Math.floor(this.props.time / 60).toString().padStart(2, "0") + ":" +
                        (this.props.time % 60).toString().padStart(2, "0")}
                </Text>
            </View>
        )
    }
}

export default timerDis;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 50,
        width: 390,
        padding: "15%",
        borderColor: "black",
        borderRadius: 80,
        borderWidth: 7,
        alignItems: 'center',
        backgroundColor: "#800000",
    },
    textStyle: {
        color: "white",
        fontSize: 50,
        fontWeight: "400",
    }
})