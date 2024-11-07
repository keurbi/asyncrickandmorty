import React, { FC } from 'react';
import styles from './DisplayComponent.module.css';
import InfoDisplay from '../InfoDisplay/InfoDisplay';

interface displayComponentProps {
  isFetched : boolean
}

const displayComponent: FC<displayComponentProps> = (isFetched) => (
  <div className={styles.displayComponent}>
    <form >
      <input type="text"  placeholder='Pick a number Morty... burp'/>
      <button type="submit">Fetch</button>
      <span> Which Rick and Morty Character ?</span>  
    </form>
    <div className="display">
      {isFetched && <InfoDisplay/>}
    </div>
  </div>
);

export default displayComponent;
