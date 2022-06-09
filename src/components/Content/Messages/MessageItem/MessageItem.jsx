import React from "react";
import styles from "./MessageItem.module.css";
import { NavLink } from "react-router-dom";


const MessageItem = ({ activUser, authorInfo, author, date, text }) => {

    const wrapperStyles = (activUser === author) ?
        `${styles.wrapper} ${styles.wrapperForActivUser}`
        :
        styles.wrapper;

    const route = (author === activUser) ? 'myPage' : author;

    return (
        <div className={wrapperStyles}>

            <NavLink to={`/${route}`}>
                <div className={styles.avatar}>
                    <img className={styles.avatarImg} src={authorInfo.avatar} />
                </div>
            </NavLink>


            <div className={styles.titleAndContent}>


                <div className={styles.title}>
                    <NavLink to={`/${route}`}>
                        <div className={styles.name}>
                            {authorInfo.name}
                        </div>
                    </NavLink>

                    <div className={styles.date}>
                        {date}
                    </div>

                </div>

                <div className={styles.text}>
                    {text}
                </div>

            </div>


        </div>
    );
}

export default MessageItem;