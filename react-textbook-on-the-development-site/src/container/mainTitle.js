import React, {Fragment} from 'react';

const MainTitle = props => {
  return (
    <Fragment>
      <a href={props.url} target="_blank" rel="noopener">{props.text}</a>
    </Fragment>
  );
};

export default MainTitle;