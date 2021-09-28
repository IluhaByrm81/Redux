const initialState = {
  salary: 1000,
};

export function reducer(state = initialState, action) {
  const updateState = { ...state };

  switch (action.type) {
    case "ADD_SALARY":
      updateState.salary = updateState.salary + 1000;
      break;
    case "DELETE_SALARY":
      updateState.salary = updateState.salary - 1000;
      break;
  }

  return updateState;
}
