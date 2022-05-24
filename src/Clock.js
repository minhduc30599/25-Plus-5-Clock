import React from "react";
import "./App.css"

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="clock mt-5 p-5 text-center text-light border border-dark border-5 rounded-pill">
                <div className="session">Session</div>
                <div className="fw-bolder time">25:00</div>

            </div>
        );
    }
}

export default Clock;