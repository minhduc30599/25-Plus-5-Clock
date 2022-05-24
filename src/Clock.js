import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mt-5 p-5 text-center text-light border border-dark border-5 rounded-pill">
                <div>Session</div>
                <div className="fw-bolder fs-6">25:00</div>

            </div>
        );
    }
}

export default Clock;