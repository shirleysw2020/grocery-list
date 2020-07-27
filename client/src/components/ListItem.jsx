import React from 'react';

var ListItem = (props) => (
  <li>
    <span> {props.grocery.name} </span>
    <span> {props.grocery.quantity} </span>
  </li>
);

export default ListItem;