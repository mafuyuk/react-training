import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Hello from "./helloworld/hello";
import Hello2 from "./helloworld/hello2";
import Profile from "./props/profile";
import List from "./props/list";
import Children from "./props/children";
import Switch from "./state/switch";
import StateProfile from "./state/profile";
import Button from "./event/button";
import EventSwitch from "./event/switch";
import KeyList from "./key/list";
import HmrIndex from "./hmr/index";
import UserCard from "./component/user-card";

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
const keyListData = [
  { id: 0, text: "foo"},
  { id: 1, text: "bar"},
  { id: 2, text: "baz"},
];

const Index = () => {
  return (
    <Fragment>
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

      <Switch />
      <StateProfile />

      <Button />
      <EventSwitch />

      <KeyList data={keyListData}/>

      <HmrIndex />

      <UserCard name={"haruka"} age={10}/>
    </Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
