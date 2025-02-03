import React, { useState } from "react"

import ListItem from "./ListItem";
const ToDoList = ({items,setitem,handleCheck,handleDelete,length,search} ) => {




  return (
    (items.length)?(
        <ListItem
        items={items.filter(items=>((items.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete} 
      length={items.length}
      />
   
    ):<><p style={{ color: 'blue', textAlign: "center", fontSize: 20 }}>The List is Empty</p>
    
    
    
    </>
  )
}

export default ToDoList