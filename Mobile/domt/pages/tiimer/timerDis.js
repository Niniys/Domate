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
        marginTop: "3%",
        marginBottom: "1%",
        width : "75%",
        padding: 40,
        borderColor: "black",
        borderRadius: 100,
        borderWidth: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#C0EDA6",
    },
    textStyle: {
        color: "black",
        fontSize: 50,
        fontWeight: "400",
    }
})