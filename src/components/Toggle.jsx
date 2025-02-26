import React, {useState} from 'react'
import Calculator from '../tsf-components/mini-projects/Calculator';

function Toggle() {
  
  const [login, setLogin] = useState(false);
  
//   function toggle() {
//     setLogin(!login);
//   }

  
    return (
    <div>
       <h1>Toggle</h1> 
   
{/* longway */}
{/* {login ? <button onClick={handleLogout}> Logout </button> : <button onClick={handleLogin}> Login </button>}    */}

{/* optimized way */}
   <button onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login" } </button>
   {/* {login ? <h1> Welcome User </h1> : <h1> Please Login </h1>} */}
   {login ? <Calculator/> : <h1> Please Login </h1>}
        </div>
  )
}

export default Toggle