import React, { useContext, useReducer } from "react";
import TodosContext from "./state/context";
import TodosReducer from "./state/reducer";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = useContext(TodosContext);
  const [{ todos, currentTodo }, dispatch] = useReducer(
    TodosReducer,
    initialState
  );
  return (
    <TodosContext.Provider value={{ todos, currentTodo, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
};

export default App;
