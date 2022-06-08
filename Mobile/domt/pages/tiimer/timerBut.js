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
        backgroundColor: "#a93190",
        borderColor: "#000",
        padding: 30,
        flexDirection: "row",
        borderRadius: 25,
    },
    buttonText: {
        color: "black",
        fontSize: 25,
        fontWeight: "300",
    }
})

export default timerBut