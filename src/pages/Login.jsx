import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { loginUser } from "../services/authService";

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser({ email, password });
            localStorage.setItem("user", JSON.stringify(user));
            setIsAuthenticated(true);
            alert("Успешный вход!");
            navigate("/");
        } catch (error) {
            alert(error.message || "Ошибка входа");
        }
    };

    return (
        <section className={styles.auth}>
            <div className={styles.auth__wrapper}>
                <h1 className={styles.auth__title}>Авторизация</h1>
                <form onSubmit={handleLogin} className={styles.auth__form}>
                    <input
                        type="email"
                        placeholder="Введите Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p className={styles.auth__eyes} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Скрыть пароль 🙈" : "Показать пароль 👁️"}
                    </p>
                    <button type="submit" className={styles.btn__auth}>Войти</button>
                </form>
                <p>
                    <a href="/register" className={styles.auth__link}>Зарегистрируйтесь</a>
                </p>
            </div>
        </section>
    );
}

export default Login;
