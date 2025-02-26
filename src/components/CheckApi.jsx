import React, { useEffect, useState } from 'react'

function CheckApi() {

const [users, setUsers] = useState(null);


const URL = "https://dummyjson.com/users"
  
useEffect(()=>{
    const fetchData = async () => {
    try {
        const response = await fetch(URL);
        console.log(response)
        const result = await response.json()
        setTimeout(() => {
            
            setUsers(result.users) 
        }, 2000)
            console.log("result=>", result)
            } 
            
            catch (error) {
      console.log("this is my error", error)  
    }
    
    }  
       fetchData();
    }, [])  

console.log(users)


    return (
    <div>
       <h1>CheckApi page</h1> 
        {users ? users.map((user) => {
           return(
               <div key={user.id}>
               <p > {user.firstName} {user.lastName} {user.email}  </p>
               
               </div>
           )
           
           
           }) : <p>Loading......</p>}
        </div>
  )
}

export default CheckApi