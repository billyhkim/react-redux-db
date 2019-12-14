import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class TodoList extends Component {
  buildTodos = () => {
    console.log('hello');
  }

  render() {
    return (
      <Table dark bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.buildTodos} */}
        </tbody>
      </Table>
    );
  }
}
