import React from "react";
import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>(isActive ? styles.active : styles.nav);

const Navbar = () => {
    return (
        <nav className={styles.nav}> 
            <NavLink to="/myPage" className={setActive}> &nbsp; Моя страница</NavLink>
            <NavLink to="/dialogs" className={setActive} > &nbsp; Сообщения</NavLink>
            <NavLink to="/friends" className={setActive} > &nbsp; Друзья</NavLink>
        </nav>
    );
}

export default Navbar;