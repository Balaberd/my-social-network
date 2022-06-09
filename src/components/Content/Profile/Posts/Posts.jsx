import React from "react";
import { useSelector } from "react-redux";
import PostTitle from "./PostTitle/PostTitle";
import styles from "./Posts.module.css"


const Posts = ({ currentProfile, activUser }) => {
    const currentUser = currentProfile ? currentProfile : activUser;
    const userPostsId = useSelector(state => state.users[currentUser].userPosts);
    const posts = useSelector(state => state.posts);
    return (
        <>
            {userPostsId.map(id =>
                <div className={styles.post} key={id}>   
                    <PostTitle
                        postId={id}
                        author={posts[id].author}
                        date={posts[id].date}
                        activUser={activUser}
                        currentUser={currentUser}
                    />
                    <div className={styles.postText}>
                        {posts[id].text}
                    </div>
                </div>
            )}
        </>
    );
}

export default Posts;