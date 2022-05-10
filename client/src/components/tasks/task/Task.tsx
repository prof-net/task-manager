import React from 'react';
import styles from './Task.module.scss';
import imgDelete from './../../../img/times-solid.svg';

const Task = () => {
    return (
        <li className={styles.task}>
            <div>
                <input type='checkbox' id='input-checkbox' />
                <label className={styles.userCheckBox} htmlFor='input-checkbox'/>
            </div>
            <h2 className={styles.title}>Задача 1</h2>
            <button className={styles.delete}>
                <img src={imgDelete} width={16} height={16}/>
            </button>
        </li>
    );
};

export default Task;