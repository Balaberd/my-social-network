import React from "react";
import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>(isActive ? styles.active : styles.nav);

const Navbar = () => {
    return (
        <nav className={styles.nav}> 
            <NavLink to="/myPage" className={setActive}> &nbsp; Моя страница</NavLink>
            <NavLink to="/messages" className={setActive} > &nbsp; Сообщения</NavLink>
        </nav>
    );
}

export default Navbar;