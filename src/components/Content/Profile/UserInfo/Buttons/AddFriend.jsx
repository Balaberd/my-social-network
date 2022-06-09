import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Buttons.module.css";


const AddFriend = ({ activUser, currentProfile, friends }) => {

    const dispatch = useDispatch();

    const removeFriend = () => {
        const payload = { user: activUser, friendId: currentProfile, type: "REMOVE_FRIEND" }
        dispatch({ type: "ACTION_ON_FRIEND", payload })
    }
    const comfirmRequest = () => {
        const payload = { user: activUser, friendId: currentProfile, type: "CONFIRM_REQUEST" } 
        dispatch({ type: "ACTION_ON_FRIEND", payload })
    }
    const rejectRequest = () => {
        const payload = { user: activUser, friendId: currentProfile, type: "REJECT_REQUEST" } 
        dispatch({ type: "ACTION_ON_FRIEND", payload })
    }
    const cancelSentRequest = () => {
        const payload = { user: activUser, friendId: currentProfile, type: "CANCEL_SENT_REQUEST" } 
        dispatch({ type: "ACTION_ON_FRIEND", payload })
    }
    const addFriend = () => {
        const payload = { user: activUser, friendId: currentProfile, type: "ADD_FRIEND" }
        dispatch({ type: "ACTION_ON_FRIEND", payload })
    }


    const getButton = () => {
        if (friends.friendsList.includes(currentProfile)) { 
            return <button onClick={removeFriend} className={styles.removeButton} > Удалить из друзей </button >
        } else if (friends.receivedRequere.includes(currentProfile)) { 
            return (
                <div>
                    <button onClick={comfirmRequest} className={styles.button} > Подтвердить друга </button >
                    <button onClick={rejectRequest} className={styles.removeButton} > Отказать </button >
                </div>
            )
        } else if (friends.sentRequere.includes(currentProfile)) { 
            return <button onClick={cancelSentRequest} className={styles.removeButton} > Отменить запрос </button >
        } else { 
            return <button onClick={addFriend} className={styles.button} > Добавить в друзья </button >
        }
    }

    return (
        <div>
            {getButton()}
        </div>
    )
}

export default AddFriend;