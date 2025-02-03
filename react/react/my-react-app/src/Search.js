import React from "react"
import './index.css'

const Search = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="searchForm">
        <input 
            type="text"
            placeholder="Search List"
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}       
        ></input>
    </form>
  )
}

export default Search