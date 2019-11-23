import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './redux/store';

import { AuthPage, LoginPage, ChatPage } from './pages';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/signup" component={AuthPage} />
        <Route exact path={['/', '/signin']} component={LoginPage} />
        <Route exact path="/im" component={ChatPage} />
      </Router>
    </Provider>
  );
}

export default App;
