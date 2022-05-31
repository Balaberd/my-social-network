import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";
import PostCreator from "./PostCreator/PostCreator";


const UserPage = ( {activUser} ) => {

    return (
        <section>
            <UserInfo activUser={activUser} />
            <PostCreator activUser={activUser}/>
            <Posts activUser={activUser} />
        </section>
    );
}

export default UserPage;