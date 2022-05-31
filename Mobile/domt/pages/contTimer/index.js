// import * as React from "react";
import  React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);
class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }
    }

    render(){

        return (
            <View style={styles.container}>
                <View style={styles.parente}>
                    <Text style={styles.crianca}>{padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.crianca}>{padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.crianca}>{padToTwo(this.state.min)}</Text>
                </View>
    
                <View style={styles.buttonParent}>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Start</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Timer;



