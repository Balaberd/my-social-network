import React from "react";
import { useSelector } from "react-redux";
import styles from "./LoginMenu.module.css";
import { useState } from "react";


const LoginMenu = ({ setActivUser }) => {
    const [enteredLogin, setEnteredLogin] = useState('')
    const [entredPassword, setEntredPassword] = useState('')

    const authenticator = useSelector(state => state.authenticator);

    const logIn = () => {
        if (authenticator[enteredLogin] && (authenticator[enteredLogin].password === entredPassword)) {
            setActivUser(authenticator[enteredLogin].id);
            setEnteredLogin('')
            setEntredPassword('')
        } else {
            alert('ВВЕДЕН НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ');
        }
    }

    return (
        <section className={styles.loginMenu}>
            <input
                value={enteredLogin}
                type="text"
                placeholder="Введите логин"
                onChange={e => setEnteredLogin(e.target.value)}
            />
            <input
                value={entredPassword}
                type="password"
                placeholder="Введите пароль"
                onChange={e => setEntredPassword(e.target.value)}
            />
            <div>
                <button className="buttonLogin" disabled>КНОПКА</button>
                <button onClick={logIn}>Вход</button>
            </div>
            <p>
                логины: cat, dog, enot. пароль: 123
            </p>

        </section>
    );
}

export default LoginMenu;