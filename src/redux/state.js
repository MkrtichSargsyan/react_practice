const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 1, message: 'HI how are you' },
        { id: 2, likesCount: 2, message: 'this is my first post' },
      ],
      newPostText: 'it camasutra',
    },
    dialogsPage: {
      messages: [{ message: 'Hi' }, { message: 'Yo' }],
      dialogs: [
        { name: 'Bob', id: 1 },
        { name: 'Tom', id: 2 },
        { name: 'Nick', id: 3 },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  getState() {
    return this.state;
  },
  callSubscriber() {},
  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this.state.profilePage.newPostText,
        likesCount: 0,
      };
      this.state.profilePage.posts.push(newPost);
      this.state.profilePage.newPostText = '';
      this.callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this.state.profilePage.newPostText = action.newText;
      this.callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this.state.dialogsPage.newMessageBody = action.body;
      this.callSubscriber();
    } else if (action.type === SEND_MESSAGE) {
      let body = this.state.dialogsPage.newMessageBody;
      this.state.dialogsPage.newMessageBody = '';
      this.state.dialogsPage.messages.push({ id: 6, message: body });
      this.callSubscriber();
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export default store;
