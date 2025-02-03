import React from 'react'
import { FaPlus } from 'react-icons/fa'

const NewListItem = ({newItem,setnewItem,handleSubmit}) => {
  return (
    <form  onSubmit={handleSubmit} className='addForm'>
        <input type="text" placeholder="Enter new Item" 
        value={newItem}    
        onChange={(e)=>setnewItem(e.target.value)} 
        required 
        autoFocus/>
        <button type='submit'><FaPlus/></button>

    </form>
  )
}

export default NewListItem