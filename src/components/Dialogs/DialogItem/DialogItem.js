import React from 'react';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  let path = '/dialogs' + props.id;
  return <NavLink to={path}>{props.name}</NavLink>;
}

export default DialogItem;
