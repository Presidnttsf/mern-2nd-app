import React, {useState} from 'react'

function Counter() {
  
  const [count, setCount] = useState(null);
  
function increment(){
    setCount(count + 1);
}
function decrement(){
    setCount(count - 1);
}

function reset (){
  setCount(0);
}

    return (
    <>
    <h1>Counter</h1>
    {/* <h2 style={count<0 ? {color:"red"} : {color: "green"}}>Count is: {count}</h2> */}
    <h2 style={{ color: count%2 !== 0 ? "red" : count === 0 ? "blue" : "green" }}>Count is: {count}</h2>

    <button onClick={increment}>Increment</button> <br/>
    <button onClick={decrement}>Decrement</button> <br/>
    <button onClick={reset}>Reset</button> <br/>

    </>
  )
}

export default Counter;