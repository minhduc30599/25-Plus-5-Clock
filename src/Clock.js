import React from "react";
import "./App.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = this.props.timeStyle < 61 ? {color: "red"} : {color: "white"};
        
        return (
            <div className="clock mt-5 p-5 text-center border border-dark border-5 rounded-pill" style={style}>
                <div className="session">{this.props.timeType}</div>
                <div className="fw-bolder time">{this.props.time}</div>
            </div>
        );
    }
}

export default Clock;