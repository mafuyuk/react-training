import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";
import Hello2 from "./hello2";
import Profile from "./profile";

import "./styles.css";

const taro = {
  name: 'Taro',
  age: 20,
  love: 'Game',
};

const hanako = {
  name: 'Hanako',
  age: 10,
  love: 'Cats',
};


function Index() {
  return (
    <div className="Index">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Hello />
      <Hello2 />
      <Profile data={taro}/>
      <Profile data={hanako}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
