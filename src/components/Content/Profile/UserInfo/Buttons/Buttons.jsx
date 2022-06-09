import React from "react";
import AddFriend from "./AddFriend";
import styles from "./Buttons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Buttons = ({ activUser, currentProfile, friends }) => {
    const dialogs = useSelector(state => state.dialogs) 
    const userDialogs = useSelector(state => state.users[activUser].dialogs) 
    const existenceOfDIalog = userDialogs.filter(el => dialogs[el].members.includes(currentProfile))[0]
    const dispatch = useDispatch();
    if (!existenceOfDIalog) {
        dispatch({
            type: "ADD_NEW_DIALOG_TO_USERS",
            payload: { members: [activUser, currentProfile], dialogId: existenceOfDIalog }
        })
        dispatch({
            type: "CREATE_NEW_DIALOG",
            payload: [activUser, currentProfile]
        })
    }
    return (
        <div className={styles.friendButtons}>
            <NavLink to={`/dialog/${existenceOfDIalog}`}>
                <button className={styles.button} >
                    Сообщение
                </button>
            </NavLink>
            
            <AddFriend
                activUser={activUser}
                currentProfile={currentProfile}
                friends={friends}
            />
        </div>
    )
}

export default Buttons;