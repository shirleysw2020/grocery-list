import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => (
  <div>
    <ul className="groceries"></ul>
    {props.groceries.map(grocery => {
      return <ListItem grocery={grocery} key={grocery.name}/>
    })}
  </div>
)

export default List;
