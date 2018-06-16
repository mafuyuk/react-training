import React, {Fragment} from 'react';
import UserCard from './user-card';

const Wrapper = () => {
  return (
    <Fragment>
      <UserCard
        name={'Taro'}
        age={18}
        onClickFunction={() => alert("hello")}
      />
    </Fragment>
  );
};

export default Wrapper;