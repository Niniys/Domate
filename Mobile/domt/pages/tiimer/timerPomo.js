import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Timer from './time'

class timerPomo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			workTime: 25,
			breakTime: 5,
			intervalType : "Working",
		}
	}

	handleTimerCompleted = () => {
		if(this.state.intervalType === "Working")
		{
			this.setState({
				intervalType: "Break"
			})
		}
		else
		{
			this.setState({
				intervalType: "Working"
			})	
		}
	}


	handleWorkTime = (text) =>
	{
		if(text >= 0)
		{
			this.setState({
				workTime: text
			})
		}
		else{
			alert("Valor inválido, insira corretamente")
			this.setState({
				workTime: 25
			})
		}
	}


	handleBreakTime = (text) =>{
		if(text >= 0)
		{
			this.setState({
				breakTime:  text
			})
		}
		else
		{
			alert("Digite um tempo válido")
			this.setState({
				breakTime: 5
			})
		}
	}


	handleTime = () => {
		if(this.state.intervalType === "Working")
		{
			return this.state.workTime
		}
		else
		{
			return this.state.breakTime
		}
	}

	render() {
		let time= this.handleTime()
		return (
				<View style={styles.container}>
					<View style={styles.row}>
						<View style={styles.inputWrap}>
							<Text style={styles.textStyle}>Trabalhar</Text>
							<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.workTime} placeholder = "Horário de trabalho" onChangeText={this.handleWorkTime} />
						</View>
						<View style={styles.inputWrap}>
							<Text style={styles.textStyle}>Descansar</Text>
							<TextInput  style={styles.textStyle}  keyboardType={"numeric"} defaultValue={''+this.state.breakTime} placeholder = "Horário da pausa" onChangeText={this.handleBreakTime} />
						</View>
					</View>
					<Timer
						intervalType={this.state.intervalType}
						Oncomplete={this.handleTimerCompleted}
						period={time}
					/>
				</View>
			)
	}
}




export default timerPomo;

const styles = StyleSheet.create({
	container: {
        backgroundColor: "#FBCEB5"
    },
    row: {
        flex: 1,
        flexDirection: "row",
		color: "#000000"
    },
    inputWrap: {
        flex: 1,
        borderColor: "#000000",
        borderBottomWidth: 2,
        // borderLeftWidth: 2,
        marginBottom: 10
    },

    textStyle: {
        fontSize: 25,
        fontWeight: "500",
        letterSpacing: 1.5,
        fontFamily: Platform.OS == "android" ? "notoserif" : "system",
        marginTop: 40,
        padding: 20
    }
});