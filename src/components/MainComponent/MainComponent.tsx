import React, { FC, useState, } from 'react';
import styles from './MainComponent.module.css';
import Checkbox from '../Checkbox/Checkbox';
import DisplayComponent from '../DisplayComponent/DisplayComponent';

interface MainComponentProps {}

const MainComponent: FC<MainComponentProps> = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [isDisabledOrNot, setIsDisabledOrNot] = useState<boolean>(true);
  const [fetchData, setFetchData] = useState<string>("");

  const check = () => {
    setIsChecked(!isChecked);
    setIsMounted(!isMounted);
  }

  const numberEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hasNumber = /\d/.test(e.target.value); // \d match avec tout chiffre de 0 à 9
    setIsDisabledOrNot(!hasNumber);
    setFetchData(e.target.value);
  }

  return (
    <div className={styles.mainComponent}>
      <Checkbox check={check}/>
      {isMounted && <DisplayComponent 
        numberEnter={numberEnter}
        isFetched={isFetched}
        isDisabledOrNot={isDisabledOrNot}
        fetchData={fetchData}
      />}
    </div>
  );
};

export default MainComponent;