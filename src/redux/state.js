import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      posts: [{
          id: 1,
          message: 'Hi, how are you?',
          likesCount: 15
        },
        {
          id: 2,
          message: 'It`s my first post',
          likesCount: 25
        },
        {
          id: 3,
          message: 'Hi, how are you?',
          likesCount: 15
        }
      ],
      newPostText: "state string"
    },
    dialogsPage: {
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

    },
    sidebar: {
      friends: [{
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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callsubscriber() {
    console.log("State changed");
  },
  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callsubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callsubscriber(this._state);
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callsubscriber(this._state);


    
  }
}


export default store;
window.store = store;
