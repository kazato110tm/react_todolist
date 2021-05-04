import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      uniqueId: 0,
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo(title) {
    const {tasks, uniqueId,} = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <TodoInput addTodo={this.addTodo} />
        <button onClick={this.resetTodo}>リセット</button>
        <TodoList tasks={this.state.tasks} />
    </div>
    );
  }
}

export default App;
