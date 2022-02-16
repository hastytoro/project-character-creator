import React from 'react';

import styles from './ButtonRow.module.css';

const ButtonRow = ({ children }) => (
  <div className={styles.buttonRow}>{children}</div>
);

export default ButtonRow;
