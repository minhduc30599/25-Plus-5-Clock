import React from "react";
import "./App.css";
import Title from "./Title";
import Feature from "./Feature";
import Clock from "./Clock";
import Author from "./Author";
import ClockControl from "./ClockControl";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container cont">
                <Title />
                <Feature />
                <Clock />
                <ClockControl />
                <Author />
            </div>
        );
    }
}

export default App;