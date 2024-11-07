import React, { FC } from 'react';
import styles from './Checkbox.module.css';

interface checkboxProps {
  check : Function
}

const checkbox: FC<checkboxProps> = ({check}) => (
  <div className={styles.checkbox}>
    <input type="checkbox" name="mount" id="mount" onChange={(e) => check(e)} /> 
      Mount the search bar
  </div>
);
export default checkbox;
