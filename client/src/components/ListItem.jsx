import React from 'react';

const ListItem = (props) => (
  <li>
  <span> {props.grocery.name} </span>
  <span> {props.grocery.quantity} </span>
</li>
)

export default ListItem