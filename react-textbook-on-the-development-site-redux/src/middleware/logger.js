const logger = store => next => action => {
  console.log('dispatching', action);
  let res = next(action);
  console.log('next state', store.getState());
  return res;
};

export default logger;
