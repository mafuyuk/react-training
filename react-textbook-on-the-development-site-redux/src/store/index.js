import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from '../reducers/index';
import logger from '../middleware/logger';

let store = createStore(todoApp, composeWithDevTools(
  applyMiddleware(logger)
));

export default store;
