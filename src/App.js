import React from "react";
import "./App.css";
import Title from "./Title";
import Feature from "./Feature";
import Clock from "./Clock";
import Author from "./Author";
import ClockControl from "./ClockControl";


let sessionCountDown;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            time: 1500,
            timeType: "Session",
            timeState: "stop"
        };

        this.setBreakLength = this.setBreakLength.bind(this);
        this.setSessionLength = this.setSessionLength.bind(this);
        this.time = this.time.bind(this);
        this.countDown = this.countDown.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    setBreakLength(e) {
        if (this.state.timeType === "Break") {
            clearInterval(sessionCountDown);
        }
        if (e.currentTarget.value === "-" && this.state.breakLength !== 1 && this.state.timeType === "Break") {
            this.setState({
                breakLength: this.state.breakLength -= 1,
                time: this.state.time -= 60
            });
        }
        else if (e.currentTarget.value === "+" && this.state.breakLength !== 60 && this.state.timeType === "Break") {
            this.setState({
                breakLength: this.state.breakLength += 1,
                time: this.state.time += 60
            });
        }
    }

    setSessionLength(e) {
        if (this.state.timeType === "Session") {
            clearInterval(sessionCountDown);
        }
        this.setState({
            timeState: "stop"
        });
        if (e.currentTarget.value === "-" && this.state.sessionLength !== 1 && this.state.timeType === "Session") {
            this.setState({
                sessionLength: this.state.sessionLength -= 1,
                time: this.state.time -= 60
            });
        }
        else if (e.currentTarget.value === "+" && this.state.sessionLength !== 60 && this.state.timeType === "Session") {
            this.setState({
                sessionLength: this.state.sessionLength += 1,
                time: this.state.time += 60
            });
        }
    }

    time() {
        let minute = Math.floor(this.state.time / 60);
        let second = this.state.time - minute * 60;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        return minute + " : " + second;
        
    }

    countDown() {
        if (this.state.timeState === "stop") {
            sessionCountDown = setInterval(() => {
                this.setState({
                    time: this.state.time -= 1
                });
                if (this.state.time ===  0 && this.state.timeType === "Session") {
                    this.setState({
                        timeType: "Break",
                        time: this.state.breakLength * 60
                    });
                }
                if (this.state.time ===  0 && this.state.timeType === "Break") {
                    this.setState({
                        timeType: "Session",
                        time: this.state.sessionLength * 60
                    });
                }
            }, 1000);
        }
    }

    stop() {
        if (this.state.timeType === "Session") {
            clearInterval(sessionCountDown);
        }
        else if (this.state.timeType === "Break") {
            clearInterval(sessionCountDown);
        }
        this.setState({
            timeState: "stop"
        });
    }

    reset() {
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            time: 1500,
            timeType: "Session",
            timeState: "stop"
        });
        if (this.state.timeType === "Session") {
            clearInterval(sessionCountDown);
        }
        else if (this.state.timeType === "Break") {
            clearInterval(sessionCountDown);
        }
    }

    render() {
        return (
            <div className="container cont">
                <Title />
                <Feature
                breakLength={this.state.breakLength}
                sessionLength={this.state.sessionLength}
                breakChange={this.setBreakLength}
                sessionChange={this.setSessionLength} />
                <Clock 
                timeType={this.state.timeType}
                timeStyle={this.state.time}
                time={this.time()} />
                <ClockControl
                countDown={this.countDown}
                stop={this.stop} 
                reset={this.reset} />
                <Author />
            </div>
        );
    }
}

export default App;