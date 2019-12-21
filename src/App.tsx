import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { AuthPage, LoginPage, ChatPage } from './pages';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import configureStore, { history } from './redux/configureStore';
import AlertList from './components/AlertList/AlertListContainer';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <PrivateRoute component={ChatPage} exact path="/im" />
        <Route exact path="/signup" component={AuthPage} />
        <Route exact path={['/', '/signin', '/login']} component={LoginPage} />
      </Router>
      <AlertList />
    </Provider>
  );
};

export default App;
