import React from 'react';
import styles from './Main.module.scss';
import Title from "../../components/title/Title";
import IconArrow from './../../img/arrow-left-solid.svg';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <Title />
            </div>
            <div className={styles.wrapper}>
                <img src={IconArrow} width={20} height={20}/>
                <p className={styles.text}>Войди или зарегестрируйся</p>
            </div>
        </div>
    );
};

export default Main;