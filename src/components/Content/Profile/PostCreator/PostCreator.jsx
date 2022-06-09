import React from "react";
import styles from "./PostCreator.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

const PostCreator = ({ activUser, currentProfile }) => {

    const dispatch = useDispatch();
    let [entiredPost, setEntiredPost] = useState('')

    const addNewPost = () => {
        if (entiredPost.trim()) {
            const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
            const payload = {
                author: activUser,
                date,
                text: entiredPost,
                wallOfPost: currentProfile //стена пользователя, где юзер оставляет пост
            };
            dispatch({ type: "ADD_POST_TO_POSTS", payload })
            dispatch({ type: "ADD_POST_TO_USER_WALL", payload })
            setEntiredPost('')
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                onChange={e => setEntiredPost(e.target.value)}
                value={entiredPost}
            />
            <button onClick={addNewPost}>Создать</button>
        </div>
    );
}

export default PostCreator;