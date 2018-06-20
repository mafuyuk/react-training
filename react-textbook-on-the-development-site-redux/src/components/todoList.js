import React, {Fragment} from 'react';

const todoList = (props) => {
  const list = props.list.map((name) => {
    return <p>name</p>
  });
  return (
    <Fragment>
      {list}
    </Fragment>
  )
};

export default todoList;
