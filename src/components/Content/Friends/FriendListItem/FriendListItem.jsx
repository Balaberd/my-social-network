import React from "react";
import AddFriend from "../../Profile/UserInfo/Buttons/AddFriend";
import styles from "./FriendListItem.module.css";
import { NavLink } from "react-router-dom";


const FriendListItem = ({ friendId, friendInfo, friends, users, activUser }) => {


    return (
        <div>
            <hr style={{ margin: "15px 0" }} />
            
            <div className={styles.friendItem}>

            <NavLink to={`/${friendId}`}>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatarImg} src={friendInfo.avatar} />
                    <div className={styles.name}>{friendInfo.name}</div>
                </div>
            </NavLink>



                <div className={styles.button}>
                    <AddFriend
                        activUser={activUser}
                        currentProfile={friendId}
                        friends={friends}
                    />

                </div>

            </div>

        </div>
    );
}

export default FriendListItem;