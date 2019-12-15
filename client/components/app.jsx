import React from 'react';
import Header from './header';
import TodoList from './todo-list';
import TodoInput from './todo-input';
import { Provider } from 'react-redux';
import { Row, Col } from 'reactstrap';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Row>
          <Col xs="8">
            <TodoList />
          </Col>
          <Col xs="4">
            <TodoInput />
          </Col>
        </Row>
      </Provider>
    );
  }
}

export default App;
