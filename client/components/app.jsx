import React from 'react';
import Header from './header';
import TodoList from './todo-list';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <TodoList />
      </>
    );
  }
}

export default App;
