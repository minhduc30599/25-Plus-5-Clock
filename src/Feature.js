import React from "react";

class Feature extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container text-light d-inline-flex flex-row
            justify-content-evenly mt-5">
                <div className="d-flex flex-column justify-content-center">
                    <div className="h3">Break length</div>
                    <div className="fs-5 mt-3 d-inline-flex justify-content-evenly">
                        <div className="fw-bolder">&#x2193;</div>
                        5
                        <div className="fw-bolder">&#x2191;</div>
                    </div>
                </div>
                <div className="fs-5 d-flex flex-column justify-content-center">
                    <div className="h3">Session length</div>
                    <div className=" mt-3 d-inline-flex justify-content-evenly">
                        <div className="fw-bolder">&#x2193;</div>
                        25
                        <div className="fw-bolder">&#x2191;</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Feature;