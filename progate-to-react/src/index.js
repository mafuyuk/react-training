import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
  return (
    <Fragment>
      <h1>Hello World</h1>
    </Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
