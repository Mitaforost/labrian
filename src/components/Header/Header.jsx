import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="/">Логотип</Link>
            </div>
            <nav className={styles.header__nav}>
                <Link to="/search">Поиск книг</Link>
                <Link to="/admin">Админка</Link>
            </nav>
        </header>
    );
};

export default Header;
