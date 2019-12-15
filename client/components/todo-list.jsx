import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Table, Button } from 'reactstrap';
import { fetchTodos, deleteTodo, toggleTodo } from '../actions/todoActions';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  }

  toggleTodo = (id, status) => {
    this.props.toggleTodo(id, status);
  }
  
  buildTodos = () => {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <tr key={todo.id}>
        {!todo.completed
          ? <><th scope="row">{todo.todo}</th><td>{todo.description}</td></>
          : <><th scope="row"><s>{todo.todo}</s></th><td><s>{todo.description}</s></td></>}
        <td>
          <Button color="secondary" size="sm" onClick={() => this.toggleTodo(todo.id, todo.completed)}>Complete</Button>
          {' '}
          <Button color="danger" size="sm" onClick={() => this.deleteTodo(todo.id)}>Delete</Button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Container>
        <Table dark bordered hover>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.buildTodos()}
          </tbody>
        </Table>
      </Container>
    );
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  // using todos because in the rootReducer index.js combineReducers it's named todos
  todos: state.todos.todos
});

export default connect(mapStateToProps, { fetchTodos, deleteTodo, toggleTodo })(TodoList);
