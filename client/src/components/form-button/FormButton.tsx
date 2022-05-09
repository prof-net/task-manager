import React from "react";

import styles from './FormButton.module.scss';

interface IProps {
    onClick: () => void;
    text: string;
}

const FormButton:React.FC<IProps> = ({onClick, text}) => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
};

export default FormButton;