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
                        <input type="button" className="symbol fw-bolder" onClick={this.props.breakChange} value="-" />
                        {this.props.breakLength}
                        <input type="button" className="symbol fw-bolder" onClick={this.props.breakChange} value="+" />
                    </div>
                </div>
                <div className="fs-5 d-flex flex-column justify-content-center">
                    <div className="h3">Session length</div>
                    <div className=" mt-3 d-inline-flex justify-content-evenly">
                        <input type="button" className="symbol fw-bolder" onClick={this.props.sessionChange} value="-" />
                        {this.props.sessionLength}
                        <input type="button" className="symbol fw-bolder" onClick={this.props.sessionChange} value="+" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Feature;