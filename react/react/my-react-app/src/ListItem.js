import React from "react"
import { BiTrash } from "react-icons/bi";


const ListItem = ({items,handleCheck,handleDelete,length}) => {
  return (
    <><ul>
              {items.map(item => (
                  <li key={item.id} className="item">
                      <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}></input>
                      <label onClick={() => handleCheck(item.id)}
                          style={(item.checked) ? { textDecoration: 'line-through' } : null}
                      >
                          {item.item}
                      </label>
                      <BiTrash
                          role="button"
                          tabIndex="0"
                          onClick={() => handleDelete(item.id)} />
                  </li>
              ))}
          </ul>
          <h1> {length} List {length===1?"Item":"Items"}</h1>
    </>
  )
}

export default ListItem