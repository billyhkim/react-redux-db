import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, InputGroup, Input, Button, Toast, ToastBody } from 'reactstrap';
import { newTodo } from '../actions/todoActions';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      description: '',
    }
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    const todo = {
      todo: this.state.todo,
      description: this.state.description,
      completed: false
    }

    if (this.state.todo !== '') {
      this.props.newTodo(todo);
      this.setState({
        todo: '',
        description: ''
      })
    } else {
      console.error('Add a todo title');
    }
  }

  onCancel = () => {
    this.setState({
      todo: '',
      description: ''
    });
  }

  errorToast = () => (
    <div className="p-3 bg-warning my-2 rounded">
      <Toast>
        <ToastBody>
          Please add a todo title.
        </ToastBody>
      </Toast>
    </div>
  )

  render() {
    return (
      <Container>
        <h4>Add Todo</h4>
        <InputGroup>
          <Input 
            placeholder="Todo"
            name="todo"
            value={this.state.todo}
            onChange={this.onInputChange} 
          />
        </InputGroup>
        {this.state.todo === '' ? this.errorToast() : null}
        <p />
        <InputGroup>
          <Input 
            placeholder="Description" 
            name="description" 
            value={this.state.description}
            onChange={this.onInputChange}
          />
        </InputGroup>
        <hr />
        <Button color="primary" onClick={this.onSave}>Save</Button>
        {' '}
        <Button color="secondary" onClick={this.onCancel}>Cancel</Button>
      </Container>
    )
  }
}

TodoInput.propTypes = {
  newTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todos.todo
});

export default connect(mapStateToProps, { newTodo })(TodoInput);