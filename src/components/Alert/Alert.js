import React from 'react';

import styles from './Alert.module.scss';

const Alert = ({ message }) => <div className={styles.alert}>{message}</div>;

export default Alert;
