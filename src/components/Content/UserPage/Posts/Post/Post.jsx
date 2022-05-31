import React from "react";
import styles from "./Post.module.css"
import PostContent from "./PostContent/PostContent";
import PostLikes from "./PostLikes/PostLikes";
import PostTitle from "./PostTitle/PostTitle";


const Post = ({author, date, text, activUser}) => {
    return (
        <div className={styles.post}>
            <PostTitle author={author} date={date} activUser={activUser}/>
            <PostContent text={text} />
            {/* <PostLikes /> */}
        </div>
    );
}

export default Post;