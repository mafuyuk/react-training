import React, {Fragment} from 'react';

const UserCard = (props) => {
  return (
    <Fragment>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <button onClick={props.onClickFunction}>Click Me!</button>
    </Fragment>
  );
};

export default UserCard;