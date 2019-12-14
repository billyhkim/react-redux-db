import React from 'react';
import Header from './header';
import TodoList from './todo-list';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <TodoList />
      </Provider>
    );
  }
}

export default App;
