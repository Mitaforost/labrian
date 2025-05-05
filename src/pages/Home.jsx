import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Добро пожаловать в библиотеку</h1>
            <p>Ищите и бронируйте книги быстро и удобно.</p>
            <div className={styles.links}>
                <Link to="/search">Поиск книг</Link>
                <Link to="/dashboard">Личный кабинет</Link>
            </div>
        </div>
    );
};

export default Home;
