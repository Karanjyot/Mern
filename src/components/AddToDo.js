import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddToDo(this.state.title);
    this.setState({ title: " " });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="title"
          placeholder="Add To Do..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddToDo;
