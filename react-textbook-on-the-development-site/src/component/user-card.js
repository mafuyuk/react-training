import React, {Fragment} from 'react';

const UserCard = (props) => {
  return (
    <Fragment>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </Fragment>
  );
};

export default UserCard;