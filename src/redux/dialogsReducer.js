const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [{
        id: 1,
        name: 'Dmitry'
    },
        {
            id: 2,
            name: 'Andrey'
        },
        {
            id: 3,
            name: 'Alexandra'
        },
        {
            id: 4,
            name: 'Victor'
        },
        {
            id: 5,
            name: 'Anna'
        }
    ],
        messages: [{
        id: 1,
        message: 'Hi'
    },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Yeah'
        }
    ],
        newMessageBody: ""

}
const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;

    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;