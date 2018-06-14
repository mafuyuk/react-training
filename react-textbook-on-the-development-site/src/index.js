import React from "react";
import ReactDOM from "react-dom";
import Hello from "./helloworld/hello";
import Hello2 from "./helloworld/hello2";
import Profile from "./props/profile";
import List from "./props/list";
import Children from "./props/children";

import "./styles.css";

const taro = {
  name: "Taro",
  age: 20,
  love: "Game"
};

const hanako = {
  name: "Hanako",
  age: 10,
  love: "Cats"
};

const satoshi = {
  name: "Satoshi",
  age: 15,
  love: "Coin"
};

const listData = ["foo", "bar", "baz"];

function Index() {
  return (
    <div className="Index">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Hello />
      <Hello2 />

      <Profile data={taro} />
      <Profile data={hanako} />

      <List data={listData} />

      <Children> Hey! props children </Children>
      <Children>
        <Profile data={satoshi} />
      </Children>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
