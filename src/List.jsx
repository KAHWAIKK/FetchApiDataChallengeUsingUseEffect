import React from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (
    <li>
        {items.map(item =>(
            <ListItem 
                key={item.id} 
                item={item}
            />
        ))}
    </li>
  )
}

export default List