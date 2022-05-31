import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

const Header = ({ setActivUser, activUser }) => {
    const avatar = useSelector(state => state.users[activUser].userInfo.avatar)

    function removeActivUser() {
        setActivUser('')
    }

    return (
        <header className={styles.header}>
            <button onClick={removeActivUser}>Выйти</button>
            <img className={styles.avatar} src={avatar} />
        </header>
    );
}

export default Header;