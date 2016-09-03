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

export function addTodo() {
  return {
    type: 'ADD_TODO'
  };
}
