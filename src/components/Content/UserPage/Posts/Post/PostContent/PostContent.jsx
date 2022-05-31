import React from "react";
import styles from './PostContent.module.css'

const PostContent = ({text}) => {
    return (
        <div className="postContent">
            <div className={styles.postText}>
               {text}
            </div>
        </div>
    );
}

export default PostContent;