import React, { useEffect, useState } from 'react'

function Effect() {
  
const [name, setName] = useState("ARshi");
const [count, setCount] = useState(0);

function updateName () {
    setName("Codevolution")
}


  useEffect(() => { console.log("fetching data") }, [count])
  
  
    return (
    <div>
<h1>USEEFFECT TUTORIAL</h1>   
<h3>{name}</h3>
<h3>{count}</h3>
<button onClick={updateName} >Update Name</button>    
<button onClick={()=>setCount(count+1)}>Count</button>    
        </div>
  )
}

export default Effect