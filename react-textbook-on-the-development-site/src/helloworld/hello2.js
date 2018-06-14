import React from "react";

const Children = props => {
  return <p>Hello World 2. name is {props.name}</p>;
};

const Hello = () => {
  return (
    <div>
      <Children name="taro" />
    </div>
  );
};
export default Hello;
