import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";
import styles from "./UserStats.module.scss";

const UserStats = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div className={styles.stats}>
            <h2>Статистика пользователей</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} - Последний вход: {user.last_login || "Никогда"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserStats;
