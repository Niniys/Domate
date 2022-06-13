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
        justifyContent: 'space-evenly',
        backgroundColor: "FF5D6C",
        marginTop: 50,
        marginBottom: 25
    },
    buttonStyle: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#C0EDA6",
        borderColor: "#000",
        borderWidth: 5,
        padding: 13,
        flexDirection: "row",
        borderRadius: 25,
    },
    buttonText: {
        color: "black",
        borderColor: "#000",
        fontSize: 25,
        fontWeight: "400",
    }
})

export default timerBut