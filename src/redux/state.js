import { renderEntireTree } from '../render'

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 15},
      {id: 2, message: 'It`s my first post', likesCount: 25},
      {id: 3, message: 'Hi, how are you?', likesCount: 15}
    ],
    newPostText: "state string"
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dmitry'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Alexandra'},
      {id: 4, name: 'Victor'},
      {id: 5, name: 'Anna'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Yeah'}
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Dmitry'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Alexandra'},
      {id: 4, name: 'Victor'},
      {id: 5, name: 'Anna'}
    ]
  }
  
  
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export default state;
