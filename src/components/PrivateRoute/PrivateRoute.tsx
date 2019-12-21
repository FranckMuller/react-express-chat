import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { connect } from 'react-redux';
import { MapStateToProps } from 'react-redux';
import { State } from '../../redux/rootReducer';
import { selectIsAuthenticated } from '../../selectors/auth';

interface PrivateRouteStateProps {
  isAuthenticated: boolean;
}

export interface PrivateRouteProps extends RouteProps, PrivateRouteStateProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = rest;
  console.log(rest);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
};

const mapStateToProps: MapStateToProps<PrivateRouteStateProps, {}, State> = (state: State) => {
  return {
    isAuthenticated: selectIsAuthenticated(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
