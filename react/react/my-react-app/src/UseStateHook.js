import { useState } from "react";
import React from "react";

const UseStateHook = () => {
    var [char,changecar]=useState("is")

    function changevariable(){
        const charact=change()
    changecar(charact)
    }


    function change()
    {
      const ca=["to","a","the","on"]
      var index=Math.floor(Math.random()*2)
      return ca[index]
    }

   

  return (
<>  <p>hello {char} everyone</p>
    <button onClick={changevariable}>change</button>
    
    
    
    
    </>
  )
}

export default UseStateHook
