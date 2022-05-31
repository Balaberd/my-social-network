import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = ({ currentPageUserId, activUser }) => {

    const id = currentPageUserId ? currentPageUserId : activUser;
    const userPostsId = useSelector(state => state.users[id].userPosts);
    const posts = useSelector(state => state.posts);

    return (
        <div>
            {userPostsId.map(id =>
                <Post
                    author={posts[id].author}
                    date={posts[id].date}
                    text={posts[id].text}
                    activUser={activUser}
                />
            )}
        </div>
    );
}

export default Posts;