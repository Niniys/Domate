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
            <View style={{ borderColor: "#FFFFFF",  borderBottomWidth: 2, width: 250, alignItems: "center", alignSelf: 'center', marginBottom: 40, width: 300}}>
                <Text style={styles.textStyle}>{texto}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        // width: 300,
        fontSize: 25,
        fontWeight: "300",
        color: "white",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 40,
        
        // marginLeft : 10,
        padding: 10,
        // alignItems: "center",
        // alignSelf: "center",
    }
});

export default timerHead;