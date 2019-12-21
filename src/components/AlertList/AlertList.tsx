import React from 'react';
import ReactDOM from 'react-dom';
import { IAlert } from '../../redux/alert/reducer';
import Alert from '../Alert/AlertContainer';

const alertWrapper = window.document.getElementById('alertWrapper');

export interface AlertListStateProps {
  items: IAlert[] | [];
}

export interface AlertListDispatchProps {
  onCloseAlert: (id: number) => void;
}

const AlertList: React.SFC<AlertListStateProps> = ({ items = [] }, onCloseAlert) => {
  let alerts: null | JSX.Element[] = null;

  if (items.length > 0) {
    alerts = items.map((el: IAlert, idx) => {
      return <Alert key={el.id} item={el} />;
    });
  }

  return ReactDOM.createPortal(alerts, alertWrapper as HTMLElement);
};

export default AlertList;
