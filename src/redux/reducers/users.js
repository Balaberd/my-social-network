const data = {

    userId1: {
        userInfo: { name: "Мурзик", birthDate: "17.05.2019", city: "г. Екатеринбург", avatar: 'https://www.meme-arsenal.com/memes/982da289bae6d7738358d8fec285acc8.jpg' },
        userPosts: ['postId1', 'postId3', 'postId4'],
    },

    userId2: {
        userInfo: { name: "Палкан", birthDate: "23.07.2018", city: "г. Екатеринбург", avatar: 'https://supercoolpics.com/wp-content/uploads/2018/01/pic_00314.jpg' },
        userPosts: ['postId2'],
    },

    userId3: {
        userInfo: { name: "Енотыч", birthDate: "17.11.2020", city: "г. Мечты", avatar: 'https://images.boosty.to/user/192811/avatar?change_time=1582193297' },
        userPosts: [],
    }

}

let postsCounter = 4;
window.dara = data

export const users = function (state = data, action) {

    function getNewPostId() {
        postsCounter++;
        return 'postId' + postsCounter;
    }

    switch (action.type) {
        case "ADD_POST_TO_USER_WALL":
            const user = action.payload.wallOfPost ? action.payload.wallOfPost : action.payload.author;
            const [...newUserPosts] = state[user].userPosts
            newUserPosts.unshift( getNewPostId() )
            let newState = {...state}
            newState[user].userPosts = newUserPosts;
            return newState

        default:
            return { ...state }
    }
}