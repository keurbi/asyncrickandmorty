import React, { FC } from 'react';
import styles from './InfoDisplay.module.css';

interface InfoDisplayProps {}

const InfoDisplay: FC<InfoDisplayProps> = () => (
  <div className={styles.InfoDisplay}>
    <img alt="" />
    <span>???</span>
  </div>
);

export default InfoDisplay;
