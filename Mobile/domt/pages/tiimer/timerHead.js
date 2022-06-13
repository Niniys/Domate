import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class timerHead extends React.Component {

    handleDisplay = () => {
        if (this.props.intervalType === "Working") {
            if (this.props.running === true) {
                return "Mantenha o trabalho"
            }
            else {
                return "Vai trabalhar"
            }
        }
        else {
            if (this.props.running === true) {
                return "Aproveite o descanso"
            }
            else {
                return "Relaxa ae"
            }
        }

    }
    
    render() {

        let texto = this.handleDisplay()
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{texto}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBCEB5"
    },
    textStyle: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "500",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 30,
        marginBottom: 30,
        borderBottomWidth: 2,
        padding: 0
    }
});

export default timerHead;