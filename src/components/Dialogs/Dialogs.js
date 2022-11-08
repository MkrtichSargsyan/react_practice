import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = 'dialogs' + props.id;

  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

function Dialogs({ dialogs, messages, newMessageBody,dispatch }) {
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  let onSendMessageClick = ()=>{
    dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (e)=>{
    let body = e.target.value
    dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
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
