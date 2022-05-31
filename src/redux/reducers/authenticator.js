
const data = {
    cat: { password: '123', id: 'userId1' },
    dog: { password: '123', id: 'userId2' },
    enot: { password: '123', id: 'userId3' },
}

export const authenticator = function (state = data, action) {
    switch (action.type) {
    
        case "USER_VALIDATION":
            return {...state}

        default:
            return state;
    }
}