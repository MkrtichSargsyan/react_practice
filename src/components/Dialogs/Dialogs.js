import React from 'react';
import { NavLink } from 'react-router-dom';
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

function Dialogs({ dialogs, messages }) {
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;
