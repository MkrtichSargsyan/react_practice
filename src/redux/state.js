import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, likesCount: 1, message: 'HI how are you' },
      { id: 2, likesCount: 2, message: 'this is my first post' },
    ],
  },
  dialogsPage: {
    messages: [{ message: 'Hi' }, { message: 'Yo' }],
    dialogs: [
      { name: 'Bob', id: 1 },
      { name: 'Tom', id: 2 },
      { name: 'Nick', id: 3 },
    ],
  },
  sidebar: {},
};

export const addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
