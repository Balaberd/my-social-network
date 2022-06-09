import React from "react";
import styles from "./PostTitle.module.css"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PostTitle = ({ author, date, activUser, postId, currentUser }) => {
    const users = useSelector(state => state.users);
    const route = (author === activUser) ? 'myPage' : author;
    const dispatch = useDispatch();
    const removePost = () => {
        dispatch({ type: "REMOVE_POST_FROM_WALL", payload: { user: currentUser, postId } })
    }
    return (
        <div className={styles.wrapper}>

            <div className={styles.postInfo}>

                <NavLink to={`/${route}`}>
                    <img src={users[author].userInfo.avatar} className={styles.autorAvatar} />
                </NavLink>

                <div className={styles.nameAndDate}>
                    <div className={styles.authorName}>
                        <NavLink to={`/${route}`}>
                            {users[author].userInfo.name}
                        </NavLink>
                    </div>

                    <div className={styles.postDate}>
                        {date}
                    </div>
                </div>

            </div>
            {(activUser === currentUser || activUser === author) &&
                <button className={styles.removePost} onClick={removePost}>
                    Удалить
                </button>
            }
        </div>
    );
}

export default PostTitle;