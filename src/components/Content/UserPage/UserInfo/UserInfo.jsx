import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserInfo.module.css";

const UserInfo = ({ activUser }) => {

    const userInfo = useSelector(state => state.users[activUser].userInfo)

    return (
        <div className={styles.userInfoWrapper}>

            <div className={styles.userAvatarWrapper}>
                <img className={styles.imgUserAvatar} src={userInfo.avatar} />
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