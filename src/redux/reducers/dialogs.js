const data = {

    dialogId1: {
        members: ['userId1', 'userId2'],
        messages: [
            { author: 'userId1', date: '10.04.22 14:04:21', text: 'Привет! Как твои дела?' },
            { author: 'userId2', date: '10.04.22 14:04:23', text: 'Гав-гав-гав!' },
            { author: 'userId1', date: '10.04.22 14:05:31', text: ' ??????????? ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Гав!!! ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Гав-гав!!! ' },
            { author: 'userId1', date: '10.04.22 14:07:11', text: ' Гуляешь возле дороги и лаешь на машины? ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Да... ' },
            { author: 'userId1', date: '10.04.22 14:04:21', text: 'Привет! Как твои дела?' },
            { author: 'userId2', date: '10.04.22 14:04:23', text: 'Гав-гав-гав!' },
            { author: 'userId1', date: '10.04.22 14:05:31', text: ' ??????????? ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Гав!!! ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Гав-гав!!! ' },
            { author: 'userId1', date: '10.04.22 14:07:11', text: ' Гуляешь возле дороги и лаешь на машины? ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Да... ' },
            { author: 'userId1', date: '10.04.22 14:04:21', text: 'Привет! Как твои дела?' },
            { author: 'userId2', date: '10.04.22 14:04:23', text: 'Гав-гав-гав!' },
            { author: 'userId1', date: '10.04.22 14:05:31', text: ' ??????????? ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Гав!!! ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Гав-гав!!! ' },
            { author: 'userId1', date: '10.04.22 14:07:11', text: ' Гуляешь возле дороги и лаешь на машины? ' },
            { author: 'userId2', date: '10.04.22 14:05:31', text: ' Да... ' }
        ]
    },

    dialogId2: {
        members: ['userId1', 'userId3'],
        messages: [
            { author: 'userId3', date: '12.04.22 14:04:21', text: ' Здравствуй, котэ ))) ' },
            { author: 'userId1', date: '12.04.22 14:04:23', text: 'Привет' }
        ]

    },

}

window.dialogs = data

let dialogsCounter = 2

export const dialogs = function (state = data, action) {
    window.stat = state
    function getNewDialogId() {
        dialogsCounter++;
        return 'dialogId' + dialogsCounter;
    }

    switch (action.type) { 

        case "CREATE_NEW_DIALOG": 
            return {...state, [getNewDialogId()]: {members: action.payload, messages: []} }
            
        case "ADD_MESSAGE":
            const newMessage = {author: action.payload.author, date: action.payload.date, text: action.payload.text}
            const [...newMessages] = state[action.payload.dialogId].messages
            newMessages.push(newMessage)
            const newDialog = {...state[action.payload.dialogId]}
            newDialog.messages = newMessages
            return {...state, [action.payload.dialogId]: newDialog}
        default:
            return { ...state }
    }
}