import React from "react";
import "./App.css";
import Title from "./Title";
import Feature from "./Feature";
import Clock from "./Clock";
import Author from "./Author";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-5">
                <Title />
                <Feature />
                <Clock />
                <Author />
            </div>
        );
    }
}

export default App;