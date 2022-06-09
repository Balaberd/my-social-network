import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons/Buttons";
import styles from "./UserInfo.module.css";

const UserInfo = ({ activUser, currentProfile } ) => {
    const currentPage = currentProfile || activUser; 
    const userInfo = useSelector(state => state.users[currentPage].userInfo); 
    const friends = useSelector(state => state.users[activUser].friends); 
    return (
        <div className={styles.userInfoWrapper}>
            <div className={styles.userAvatarWrapper}>
                <img className={styles.imgUserAvatar} src={userInfo.avatar} />
                {currentProfile && 
                    <Buttons
                        activUser={activUser}
                        currentProfile={currentProfile}
                        friends={friends}
                    />
                }
            </div>
            <div className={styles.userAbout}>
                <div>
                    {userInfo.name}
                </div>
                <div>
                    {userInfo.birthDate}
                </div>
                <div>
                    {userInfo.city}
                </div>
            </div>
        </div>
    )
}

export default UserInfo;