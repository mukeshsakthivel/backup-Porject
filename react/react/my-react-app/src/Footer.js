import React from "react"

const Fotter = () => {
    const year=new Date();
  return (
    <footer>
      <p>CopyRights &copy; {year.getFullYear()}</p>
    </footer>
  )
}

export default Fotter