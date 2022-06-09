import React, { useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import { useSelector } from "react-redux";
import styles from "./Dialogs.module.css";

const Dialogs = ({ activUser }) => {
    const dialogs = useSelector(state => state.dialogs);
    const users = useSelector(state => state.users);

    const getLastMessageIndex = (dialog) => {
        return dialogs[dialog].messages.length - 1;
    }

    const userDialogsId = users[activUser].dialogs;

    return (
        <div className={styles.wrapper}>
            {userDialogsId.map(el =>
                < DialogItem
                    key={el}
                    dialogId={el}
                    dialogs={dialogs}
                    users={users}
                    activUser={activUser}
                    lastMessage={dialogs[el].messages[getLastMessageIndex(el)]}
                />)
            }
        </div>
    );


}

export default Dialogs;