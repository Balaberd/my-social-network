import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css"

const DialogItem = ({ activUser, users, dialogs, lastMessage, dialogId }) => {

    let companion = [...dialogs[dialogId].members]
    companion.splice((companion.indexOf(activUser)), 1)
    companion = companion[0]

    const route = (companion === activUser) ? 'myPage' : dialogId;

    return (

        <div className={styles.wrapper} >
            <div className={styles.companionAvatar}>
                <NavLink to={`/dialog/${route}`}>
                    <img className={styles.companionAvatarImg} src={users[companion].userInfo.avatar} />
                </NavLink>
            </div>

            <div className={styles.content}>
                <NavLink to={`/dialog/${route}`}>
                    <div className={styles.companionName}>
                        {users[companion].userInfo.name}
                    </div>

                    <div className={styles.lastMessageInfo}>

                        <div className={styles.authorAvatar}>
                            <img className={styles.authorAvatarImg} src={users[lastMessage.author].userInfo.avatar} />
                        </div>

                        <div className={styles.text}>
                            {lastMessage.text}
                        </div>

                        <div className={styles.date}>
                            {lastMessage.date}
                        </div>
                    </div>
                </NavLink>
            </div>

        </div>
    );
}

export default DialogItem;