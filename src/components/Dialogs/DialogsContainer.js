import { connect } from 'react-redux';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogsReducer';

import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDidpatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDidpatchToProps)(Dialogs);

export default DialogsContainer;
