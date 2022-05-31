import React from "react";
import styles from "./PostTitle.module.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PostTitle = ({ author, date, activUser }) => {

    const users = useSelector(state => state.users);
    const route = (author === activUser) ? 'myPage' : author;

    return (
        <div className={styles.wrapper}>

            <NavLink to={`/${route}`}>
                <img src={users[author].userInfo.avatar} className={styles.autorAvatar} />
            </NavLink>
     
            <div className={styles.postInfo}>

                <div className={styles.authorName}>
                    <NavLink to={`/${route}`}>{users[author].userInfo.name}</NavLink>
                </div>

                <div className={styles.postDate}>
                    {date}
                </div>

            </div>

        </div>
    );
}

export default PostTitle;