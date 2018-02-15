import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import AuthorizationPage from './components/AuthorizationPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Main />
        </Header>

        {/*<AuthorizationPage/>*/}
      </div>
    );
  }
}
export default App;
