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
            <Text style={styles.textStyle}>{texto}</Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: "500",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 40,
        padding: 20
    }
});

export default timerHead;