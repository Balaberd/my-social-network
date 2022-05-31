import React from "react";
import { useSelector } from "react-redux";
import styles from "./LoginMenu.module.css";
import { useState } from "react";


const LoginMenu = ({ setActivUser }) => {

    let [enteredLogin, setEnteredLogin] = useState('')
    let [entredPassword, setEntredPassword] = useState('')

    const authenticator = useSelector(state => state.authenticator);

    let logIn = () => {
        if (authenticator[enteredLogin] && (authenticator[enteredLogin].password === entredPassword)) {
            setActivUser(authenticator[enteredLogin].id);
        } else {
            alert('ВВЕДЕН НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ');
        }
        setEnteredLogin('')
        setEntredPassword('')
    }

    return (
        <section className={styles.loginMenu}>

            <div>
                <input
                    value={enteredLogin}
                    type="text"
                    placeholder="Введите логин"
                    onChange={e => setEnteredLogin(e.target.value)}
                />
            </div>

            <div>
                <input
                    value={entredPassword}
                    type="password"
                    placeholder="Введите пароль"
                    onChange={e => setEntredPassword(e.target.value)}
                />
            </div>

            <div>
                <button className="buttonLogin" disabled>КНОПКА</button>
                <button onClick={logIn}>Вход</button>
            </div>
            <div>
                логины: cat, dog, enot. пароль: 123
            </div>

        </section>
    );
}

export default LoginMenu;