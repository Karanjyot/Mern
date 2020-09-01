import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddToDo from "./components/AddToDo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from "uuid";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  //lifecycle method

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        this.setState({ todos: res.data });
      });
  }
  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  };

  //delete todo

  delToDo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //add a todo

  AddToDo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) => {
        this.setState({
          todos: [...this.state.todos, res.data],
        });
      });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path={"/"}
              render={(props) => (
                <React.Fragment>
                  <AddToDo AddToDo={this.AddToDo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delToDo={this.delToDo}
                  />
                </React.Fragment>
              )}
            />

            <Route path={"/about"} component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
