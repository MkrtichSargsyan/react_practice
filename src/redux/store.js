import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';


let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 1, message: 'HI how are you' },
        { id: 2, likesCount: 2, message: 'this is my first post' },
      ],
      newPostText: '',
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
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
    this.state.sidebar = sidebarReducer(this.state.sidebar, action);

    this.callSubscriber(this.state);
  },
};

export default store;
