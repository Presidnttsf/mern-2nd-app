import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import UserCard from './UserCard';

function GetDataAxios() {
  const [users, setUsers] = useState([]);
  const URL = "https://dummyjson.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setTimeout(() => {
          setUsers(response.data.users);
        }, 100);
      } catch (error) {
        console.log("this is my error", error);
      }
    };
    fetchData();
  }, []);
console.log(users)
  return (
    <div>
      <h1>GetDataAxios</h1>
      {users.length > 0 ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "20px", // spacing between cards
          padding: "20px"
        }}>
          {users.map((user, i) => (
            <UserCard key={user.id} user={user} index={i} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default GetDataAxios;
