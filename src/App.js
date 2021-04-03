import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData,
    };
  }

  render() {
    const todoItems = this.state.todo.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
