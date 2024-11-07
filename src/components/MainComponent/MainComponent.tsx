import React, { FC, useState, } from 'react';
import styles from './MainComponent.module.css';
import Checkbox from '../Checkbox/Checkbox';
import DisplayComponent from '../DisplayComponent/DisplayComponent';

interface MainComponentProps {}

const MainComponent: FC<MainComponentProps> = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const check = () => {
    setIsChecked(!isChecked);
    setIsMounted(!isMounted);
  }

  return (
    <div className={styles.mainComponent}>
      <Checkbox check={check}/>
      {isMounted && <DisplayComponent isFetched={isFetched} />}
    </div>
  );
};
export default MainComponent;