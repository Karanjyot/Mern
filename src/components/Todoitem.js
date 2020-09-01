import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  //   we dont call functions like this because this key word is not avaliable to custom methods
  //   markComplete(){
  //       console.log(this.props)
  //   }

  render() {
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(
            this,
            this.props.todo.id,
            this.props.todo.title
          )}
        />
        <p>{this.props.todo.title}</p>
        <button
          style={btnStyle}
          onClick={this.props.delToDo.bind(this, this.props.todo.id)}
        >
          x
        </button>
      </div>
    );
  }
}

// prop types
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delToDo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default Todoitem;
