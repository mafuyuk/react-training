import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";
import Hello2 from "./hello2";

import "./styles.css";

function Index() {
    return (
        <div className="Index">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Hello />
            <Hello2 />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
