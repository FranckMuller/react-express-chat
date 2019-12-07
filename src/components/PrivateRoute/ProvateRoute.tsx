import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthed = true;
  console.log(rest);

  if (!isAuthed) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
