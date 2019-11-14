import React, { Component } from "react";

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: [],
      completed: {}
    };
  }

  onChange = event => {
    this.setState({ userInput: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      userInput: "",
      items: [...this.state.items, this.state.userInput]
    });
    console.log(this.state.items);
  };

  handleRemove(index, event) {
    let array = this.state.items;
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }
  handleCheck(index, event) {
    this.setState(state => ({
      completed: { ...state.completed, [index]: !state.completed[index] }
    }));
    console.log(this.state.completed);
  }

  render() {
    return (
      <div className="container">
        <h1 align="center">To Do App</h1>
        <form className="form-row align-items-center" onSubmit={this.onSubmit}>
          <input
            className="input"
            value={this.state.userInput}
            onChange={this.onChange}
            className="form-control nb-2"
          />
          <button className="btn btn-primary">Submit</button>
        </form>
        <ul className="list-group">
          {this.state.items.map((item, index) => (
            <li
              className="list-group-item d-flex align-items-start"
              key={index}
              style={{
                textDecoration: this.state.completed[index]
                  ? "line-through"
                  : ""
              }}
            >
              <input
                className="m-2"
                id="chk"
                onChange={() => this.handleCheck(index)}
                type="checkbox"
              />
              <span>{item}</span>
              <button
                className="btn btn-info ml-auto p-2 bd-highlight"
                onClick={event => this.handleRemove(index, event)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
