import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthPage, LoginPage, ChatPage } from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/signup" component={AuthPage} />
      <Route exact path={['/', '/signin']} component={LoginPage} />
      <Route exact path="/im" component={ChatPage} />
    </Router>
  );
}

export default App;
