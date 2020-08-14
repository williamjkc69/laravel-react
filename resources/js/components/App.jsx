import React from "react";
import ReactDOM from "react-dom";

export default function App() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>React Component in Laravel 2</h2>
                        </div>

                        <div className="card-body">
                            I'm tiny React component in Laravel app!
                        </div>

                        <div className="card-body">
                            this is my first deployment!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
