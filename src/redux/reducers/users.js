const data = {

    userId1: {
        userInfo: { name: "Мурзик", birthDate: "17.05.2019", city: "г. Екатеринбург", avatar: 'https://www.meme-arsenal.com/memes/982da289bae6d7738358d8fec285acc8.jpg' },
        userPosts: ['postId5', 'postId4', 'postId3', 'postId1'],
        dialogs: ['dialogId1', 'dialogId2'],
        friends: {
            friendsList: ['userId3'],
            receivedRequere: ['userId2'],
            sentRequere: []
        }
    },

    userId2: {
        userInfo: { name: "Палкан", birthDate: "23.07.2018", city: "г. Екатеринбург", avatar: 'https://supercoolpics.com/wp-content/uploads/2018/01/pic_00314.jpg' },
        userPosts: ['postId2'],
        dialogs: ['dialogId1'],
        friends: {
            friendsList: ['userId3'],
            receivedRequere: [],
            sentRequere: ['userId1']
        }

    },

    userId3: {
        userInfo: { name: "Енотыч", birthDate: "17.11.2020", city: "г. Мечты", avatar: 'https://images.boosty.to/user/192811/avatar?change_time=1582193297' },
        userPosts: ['postId6'],
        dialogs: ['dialogId2'],
        friends: {
            friendsList: ['userId1', 'userId2'],
            receivedRequere: [],
            sentRequere: []
        }
    }

}
window.users = data

let postsCounter = 6;
let dialogsCounter = 2

function getNewDialogId() {
    dialogsCounter++;
    return 'dialogId' + dialogsCounter;
}

function getNewPostId() {
    postsCounter++;
    return 'postId' + postsCounter;
}
export const users = function (state = data, action) {
    switch (action.type) {

        case "ADD_NEW_DIALOG_TO_USERS":
            const member1 = {...state[action.payload.members[0]]}
            const member2 = {...state[action.payload.members[1]]}
            const newDialogId = getNewDialogId()
            member1.dialogs.push(newDialogId)
            member2.dialogs.push(newDialogId)
            return {...state, [action.payload.members[0]]: member1, [action.payload.members[1]]: member2}

        case "ADD_POST_TO_USER_WALL":
            const user = action.payload.wallOfPost || action.payload.author;
            const [...incrementUserPosts] = state[user].userPosts;
            incrementUserPosts.unshift(getNewPostId());
            return { ...state, [user]: { ...state[user], userPosts: incrementUserPosts } }
            break;

        case "REMOVE_POST_FROM_WALL":
            const [...decrementUserPosts] = state[action.payload.user].userPosts;
            decrementUserPosts.splice((decrementUserPosts.indexOf(action.payload.postId)), 1)
            return { ...state, [action.payload.user]: { ...state[action.payload.user], userPosts: decrementUserPosts } }
            break;

        case "ACTION_ON_FRIEND":
            const friendId = action.payload.friendId
            const [...newUserFriendsList] = state[action.payload.user].friends.friendsList
            const [...newUserReceivedRequere] = state[action.payload.user].friends.receivedRequere
            const [...newUserSentRequere] = state[action.payload.user].friends.sentRequere
            const newUserFriends = { friendsList: newUserFriendsList, receivedRequere: newUserReceivedRequere, sentRequere: newUserSentRequere }

            const [...newFriendFriendsList] = state[friendId].friends.friendsList
            const [...newFriendReceivedRequere] = state[friendId].friends.receivedRequere
            const [...newFriendSentRequere] = state[friendId].friends.sentRequere
            const newFriendFriends = { friendsList: newFriendFriendsList, receivedRequere: newFriendReceivedRequere, sentRequere: newFriendSentRequere }

            if (action.payload.type === "REMOVE_FRIEND") {
                // удалить из друзей 
                // удаляет друга из друзей юзера
                newUserFriendsList.splice((newUserFriendsList.indexOf(friendId)), 1)
                // добавляет юзеру заявку от друга
                newUserReceivedRequere.push(friendId)
                // удаляет юзера из друзей друга
                newFriendFriendsList.splice((newFriendFriendsList.indexOf(action.payload.user)), 1)
                // добавляет к другу исходящий заявку на юзера
                newFriendSentRequere.push(action.payload.user)
                const newUser = { ...state[action.payload.user], friends: newUserFriends }
                const newFriend = { ...state[friendId], friends: newFriendFriends }
                return { ...state, [action.payload.user]: newUser, [friendId]: newFriend }
                break;
            } else if (action.payload.type === "CONFIRM_REQUEST") {
                // Подтвердить входящий запрос 
                // добавляет юзеру друга
                newUserFriendsList.push(friendId)
                // добавляет другу юзера
                newFriendFriendsList.push(action.payload.user)
                // удаляет входящую заявку у юзера
                newUserReceivedRequere.splice((newUserReceivedRequere.indexOf(friendId)), 1)
                // удаляеет у друга исходящую заявку
                newFriendSentRequere.splice((newFriendSentRequere.indexOf(action.payload.user)), 1)
                const newUser = { ...state[action.payload.user], friends: newUserFriends }
                const newFriend = { ...state[friendId], friends: newFriendFriends }
                return { ...state, [action.payload.user]: newUser, [friendId]: newFriend }
                break;
            } else if (action.payload.type === "CANCEL_SENT_REQUEST") {
                // Отменить исходящий запрос 
                // удаляет входящую заявку у юзера
                newUserSentRequere.splice((newUserSentRequere.indexOf(friendId)), 1)
                // удаляет исходящую заявку у друга
                newFriendReceivedRequere.splice((newFriendReceivedRequere.indexOf(action.payload.user)), 1)
                const newUser = { ...state[action.payload.user], friends: newUserFriends }
                const newFriend = { ...state[friendId], friends: newFriendFriends }
                return { ...state, [action.payload.user]: newUser, [friendId]: newFriend }
                break;
            } else if (action.payload.type === "ADD_FRIEND") {
                //Добавить в друзья 
                //создает исходящую заявку у юзера
                newUserSentRequere.push(friendId)
                //создает входящую заявку у друга
                newFriendReceivedRequere.push(action.payload.user)
                const newUser = { ...state[action.payload.user], friends: newUserFriends }
                const newFriend = { ...state[friendId], friends: newFriendFriends }
                return { ...state, [action.payload.user]: newUser, [friendId]: newFriend }
                break;
            } else if (action.payload.type === "REJECT_REQUEST") {
                //отменить запрос
                //удалить во входящих запросах у юзера друга
                newUserReceivedRequere.splice((newUserReceivedRequere.indexOf(friendId)), 1)
                //удалить у друга исходящую заявку
                newFriendSentRequere.splice((newFriendSentRequere.indexOf(action.payload.user)), 1)
                const newUser = { ...state[action.payload.user], friends: newUserFriends }
                const newFriend = { ...state[friendId], friends: newFriendFriends }
                return { ...state, [action.payload.user]: newUser, [friendId]: newFriend }
                break;
            }

        default:
            return { ...state }
    }
}