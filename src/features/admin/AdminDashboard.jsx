import React from "react";
import styles from "./AdminDashboard.module.scss";
import CatalogCRUD from "./CatalogCRUD";
import BookCRUD from "./BookCRUD";
import UserStats from "./UserStats";

const AdminDashboard = () => {
    return (
        <div className={styles.dashboard}>
            <h1>Панель администратора</h1>
            <CatalogCRUD />
            <BookCRUD />
            <UserStats />
        </div>
    );
};

export default AdminDashboard;
