import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import { registerUser } from "../services/authService";

function Register() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ fullName, email, phone, password });
            alert("Регистрация успешна!");
            navigate("/login");
        } catch (error) {
            alert(error.message || "Ошибка регистрации");
        }
    };

    return (
        <section className={styles.auth}>
            <div className={styles.auth__wrapper}>
                <h1 className={styles.auth__title}>Регистрация</h1>
                <form onSubmit={handleRegister} className={styles.auth__form}>
                    <input
                        type="text"
                        placeholder="ФИО"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p className={styles.auth__eyes} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Скрыть пароль 🙈" : "Показать пароль 👁️"}
                    </p>
                    <button type="submit" className={styles.btn__auth}>Зарегистрироваться</button>
                </form>
                <p>
                    <a href="/login" className={styles.auth__link}>Войти</a>
                </p>
            </div>
        </section>
    );
}

export default Register;
