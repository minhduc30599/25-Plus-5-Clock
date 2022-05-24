import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class ClockControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container d-inline-flex justify-content-evenly text-white mt-4 fs-5">
                <i className="fa fa-play i" aria-hidden="true"></i>
                <i className="fa fa-pause i" aria-hidden="true"></i>
                <i className="fa fa-refresh i" aria-hidden="true"></i>
            </div>
        );
    }
}

export default ClockControl;