const data = {

    postId1: {
        author: 'userId1',
        date: '17.04.2022 17:00:15',
        text: 'Мой первый пост! Мяу!!'
    },

    postId2: {
        author: 'userId2',
        date: '18.04.2022 12:00:12',
        text: 'Гав-гав!'
    },

    postId3: {
        author: 'userId2',
        date: '22.04.2022 18:05:55',
        text: 'ГАВ-ГАВ! Я наследил у тебя на стене :ь '
    },

    postId4: {
        author: 'userId1',
        date: '22.04.2022 18:15:06',
        text: 'Ух я тебе, Палкан!!! >_<'
    }
};

let postsCounter = 4;

export const posts = function (state = data, action) {

    function getNewPostId() {
        postsCounter++;
        return 'postId' + postsCounter;
    }

    switch (action.type) {
        case "ADD_POST_TO_POSTS":
            const { wallOfPost, ...post } = action.payload;
            return { ...state, [getNewPostId()]: post }
        default:
            return { ...state }
    }
}