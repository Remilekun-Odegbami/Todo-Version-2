import React, { Component } from 'react';
import './TodoInput.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      backgroundColor: '',
      fontSize: '',
    };
  }

  boxClick = () => {
    this.setState({
      color: 'white',
      backgroundColor: 'red',
      fontSize: '20px',
    });
  };

  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h4
          style={{
            color: this.state.color,
            fontSize: this.state.fontSize,
            backgroundColor: this.state.backgroundColor,
          }}
        >
          {title}
        </h4>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fa fa-pencil"></i>
          </span>
          <span className="mx-2 text-primary">
            <i
              className="fa fa-check"
              aria-hidden="true"
              onClick={this.boxClick}
            ></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
