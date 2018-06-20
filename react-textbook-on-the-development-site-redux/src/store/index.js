import { createStore, applyMiddleware } from 'redux';
import todoApp from '../reducers/index';
import logger from '../middleware/logger';

let store = createStore(
  todoApp,
  applyMiddleware(logger)
);

export default store;
