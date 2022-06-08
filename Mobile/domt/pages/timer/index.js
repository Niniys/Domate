import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../tiimer/head'
import PomodoroTimer from '../tiimer/timerPomo'

export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header />
                <PomodoroTimer />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});