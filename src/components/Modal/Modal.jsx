import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, children, onClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <button className={styles.modal__close} onClick={onClose}>
                    &times;
                </button>
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
