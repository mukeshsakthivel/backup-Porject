import React from "react"

function Content() {
    function change()
    {
      const ca=["to","a","the","on"]
      var index=Math.floor(Math.random()*2)
      return ca[index]
    }
    return (
        <p>hello {change()} everyone</p>
    )
}

export default Content