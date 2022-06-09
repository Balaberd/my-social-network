import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";
import PostCreator from "./PostCreator/PostCreator";
import { useParams } from "react-router-dom";

const Profile = ({ activUser }) => {
    const { currentProfile } = useParams();
    if (activUser !== currentProfile) {
        return (
            <>
                <UserInfo activUser={activUser} currentProfile={currentProfile} />
                <PostCreator activUser={activUser} currentProfile={currentProfile} />
                <Posts activUser={activUser} currentProfile={currentProfile}  />
            </>
        );
    }
}

export default Profile;