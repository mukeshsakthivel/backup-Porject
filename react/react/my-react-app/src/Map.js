import React from "react"

const Map = () => {
    const numbers=[-1,-2,0,1,2,3]
    const items=numbers.filter(n=>n>0).map(n=>n)
  
  return (
    <div>{items}</div>
  )
}

export default Map
