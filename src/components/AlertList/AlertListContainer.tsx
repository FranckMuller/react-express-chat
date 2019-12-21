import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import AlertList, { AlertListStateProps } from './AlertList';
import { State } from '../../redux/rootReducer';
import { selectAlertItems } from '../../selectors/alert';

const AlertContainer: React.FC<AlertListStateProps> = ({ items }) => {
  return <AlertList items={items} />;
};

const mapStateToProps: MapStateToProps<AlertListStateProps, {}, State> = (state: State): AlertListStateProps => {
  return {
    items: selectAlertItems(state)
  };
};

export default connect(mapStateToProps)(AlertContainer);
