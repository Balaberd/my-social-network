import React from "react";
import styles from "./Messages.module.css"
import MessageItem from "./MessageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";


const Messages = ({ activUser }) => {
    const [entiredMessage, setEntiredMessage] = useState('');

    const { dialogId } = useParams();

    const userDialogs = useSelector(state => state.users[activUser].dialogs)
    const dispatch = useDispatch();

    const messages = useSelector(state => state.dialogs[dialogId].messages)
    const users = useSelector(state => state.users)
    const addNewMessage = () => {
        if (entiredMessage.trim()) {
            const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
            const payload = {
                author: activUser,
                date,
                dialogId,
                text: entiredMessage,
            };
            dispatch({ type: "ADD_MESSAGE", payload })
            setEntiredMessage('')
        }
    }

    const validationOfMembers = userDialogs.includes(dialogId)
  
    if(!validationOfMembers) {
        return <Navigate to="/myPage" />
    } else {
        return (
        <div className={styles.wrapper}>
            <div className={styles.messages}>
                {messages.map(el =>
                    <MessageItem
                        activUser={activUser}
                        activUserInfo={users[activUser].userInfo}
                        authorInfo={users[el.author].userInfo}
                        author={el.author}
                        date={el.date}
                        text={el.text}
                    />
                )}
            </div>

            <div className={styles.form}>
                <textarea
                    onChange={e => setEntiredMessage(e.target.value)}
                    value={entiredMessage}
                    placeholder="Введите сообщение"
                    type="text"
                    className={styles.textarea}>
                </textarea>
                <button onClick={addNewMessage} className={styles.button}>Отправить</button>
            </div>
        </div>
    );
                }
}

export default Messages;