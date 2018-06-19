function visibilityFilter(state='SHOW_ALL', action) {
  if(action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function todos() {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);
    case 'TOGGLE_TODO':
      return state.map(
        (map, index) => action.index === index ? {text: todo.text, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}
