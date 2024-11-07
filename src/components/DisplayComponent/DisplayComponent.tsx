import React, { FC } from 'react';
import styles from './DisplayComponent.module.css';
import InfoDisplay from '../InfoDisplay/InfoDisplay';

interface displayComponentProps {
  isFetched : boolean,
  isDisabledOrNot : boolean,
  fetchData : string,
  numberEnter : Function
}

const displayComponent: FC<displayComponentProps> = ({ fetchData, isFetched, isDisabledOrNot , numberEnter}) => (
  <div className={styles.displayComponent}>
    <form onSubmit={() => fetchData}>
      <input type="text" placeholder='Pick a number Morty... burp' onChange={(e) => numberEnter(e)}/>
      <button disabled={isDisabledOrNot} type="submit">Fetch</button>
      <span> Which Rick and Morty Character ?</span>  
    </form>
    <div className="display">
      {isFetched && <InfoDisplay/>}
    </div>
  </div>
);

export default displayComponent;