import React from "react";

const List = props => {
  const listItems = props.data.map((data) => {
    return (
      // keyを指定しておくとdomの再構築の範囲を小さくできる
      <li key={data.id}>{data.text}</li>
    );
  });

  return <ul>{listItems}</ul>;
};

export default List;
