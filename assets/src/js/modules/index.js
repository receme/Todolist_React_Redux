const initialState = {
  todos: []
};

function initial(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat([action.todo])
      };
    default: {
      return state;
    }
  }
}

export {
  initial,
};

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    todo: {
      done: false,
      text
    }
  };
}
