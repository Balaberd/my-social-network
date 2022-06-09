import React from "react";
import { useSelector } from "react-redux";
import { users } from "../../../redux/reducers/users";
import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./Friends.module.css";

const Friends = ({ activUser }) => {

    const users = useSelector(state => state.users)
    const friends = users[activUser].friends

    return (
        <section className={styles.wrapper}>

            <div className={styles.blocks} >
                <input placeholder="найти друзей (пока не работает)"></input>
                <button>поиск </button>
            </div>

            {friends.receivedRequere.length ?
                <div className={styles.blocks} >
                    <h3 className={styles.header}>Заявки в друзья</h3>
                    {friends.receivedRequere.map(friendId =>
                        <FriendListItem
                            activUser={activUser}
                            friendId={friendId}
                            friendInfo={users[friendId].userInfo}
                            key={friendId}
                            friends={friends}
                            users={users}
                        />
                    )}
                </div>
                :
                null
            }

            {friends.sentRequere.length > 0 ?
                <div className={styles.blocks} >
                    <h3 className={styles.header}>Отправленные заявки</h3>
                    {friends.sentRequere.map(friendId =>
                        <FriendListItem
                            activUser={activUser}

                            friendId={friendId}
                            friendInfo={users[friendId].userInfo}
                            key={friendId}
                            friends={friends}
                            users={users}
                        />
                    )}
                </div>
                :
                null
            }

            {friends.friendsList.length > 0 ?
                <div className={styles.blocks}>
                    <h3 className={styles.header}>Список друзей</h3>
                    {friends.friendsList.map(friendId =>
                        <FriendListItem
                            activUser={activUser}
                            friendId={friendId}
                            friendInfo={users[friendId].userInfo}
                            key={friendId}
                            friends={friends}
                            users={users}
                        />
                    )}
                </div>
                :
                <div className={`${styles.blocks} ${styles.header}`}>
                    <h1>У вас пока нет друзей</h1>
                </div>

            }


        </section >
    );
}

export default Friends;