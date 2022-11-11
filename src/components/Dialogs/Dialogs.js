import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

function Dialogs({ dialogsPage, sendMessage, updateNewMessageBody }) {
  let state = dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
