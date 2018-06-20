import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import store from './store/index';
import App from './containers/app';


const Root = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
};


const rootElement = document.querySelector('#root');
ReactDOM.render(
  <Root />,
  rootElement
);
