import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class timerBut extends React.Component {
    state = {};

    render() {
        if (this.props.running === true) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.pause}>
                        <Text style={styles.buttonText}>Pause</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.props.play}>
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 20,
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    buttonStyle: {
        alignItems: "center",
        backgroundColor: "#800000",
        borderColor: "#000",
        borderWidth: 5,
        padding: 20,
        flexDirection: "row",
        borderRadius: 30,
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    }
})

export default timerBut