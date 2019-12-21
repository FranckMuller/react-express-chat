import React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import Alert from './Alert';
import { IAlert } from '../../redux/alert/reducer';
import { closeAlert } from '../../redux/alert/actions';

interface AlertDispatchProps {
  onCloseAlert: (id: number) => void;
}

interface AlertContainerProps {
  item: IAlert;
}

const AlertContainer: React.SFC<AlertContainerProps & AlertDispatchProps> = ({ onCloseAlert, ...viewProps }) => {
  const onClose = (id: number) => {
    onCloseAlert(id);
  };

  return <Alert onClose={onClose} {...viewProps} />;
};

const mapDispatchToProps: MapDispatchToProps<AlertDispatchProps, {}> = {
  onCloseAlert: closeAlert
};

export default connect(null, mapDispatchToProps)(AlertContainer);
