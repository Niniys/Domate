
import React from 'react';
import { View} from 'react-native';
import TimerHeader from './timerHead'
import TimerDisplay from './timerDis'
import TimerButtons from './timerBut'
import { Vibration } from 'react-native'

class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            running: false,
            time: this.props.period * 60
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ running: false, time: nextProps.period * 60 });
        if (this.state.running === true && this.state.time == 0) {
            this.handlePlay()
        }
    }

    render() {
        return (
            <View>
                <TimerHeader
                    running={this.state.running}
                    intervalType={this.props.intervalType}
                />
                <TimerDisplay
                    time={this.state.time}
                />
                <TimerButtons
                    play={this.handlePlay}
                    pause={this.handlePause}
                    reset={this.handleReset}
                    running={this.state.running}
                />
            </View>
        )
    }

    componentDidUpdate() {
        if (this.state.running === true && this.state.time == 0) {
            clearInterval(this.timerId)
            Vibration.vibrate([500, 500, 500])
            this.props.Oncomplete()

        }
        else if (this.state.running === false) {
            clearInterval(this.timerId)
        }
    }


    handlePlay = () => {
        this.setState({
            running: true
        })
        this.timerId = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000)
    }


    handlePause = () => {
        clearInterval(this.timerId)
        this.setState({
            running: false
        })
    }


    handleReset = () => {
        clearInterval(this.timerId)
        this.setState({
            running: false,
            time: this.props.period * 60
        })
    }
}

export default Timer;
