import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts"; //asd
import PostCreator from "./PostCreator/PostCreator";
import { useParams } from "react-router-dom";

const CurrentUserPage = ({ activUser }) => {
    
    const {currentPageUserId} = useParams();

    return (
        <section>
            <UserInfo activUser={currentPageUserId} />
            <PostCreator activUser={activUser} currentPageUserId={currentPageUserId}/>
            <Posts currentPageUserId={currentPageUserId} activUser={activUser}/>
        </section>
    );
}

export default CurrentUserPage;