import React from "react";
import UserCardF from "../../components/UserCardF";
import Loading from "../../components/Loading";

function GetDataAxios({ users = [], searchTerm = "" }) {
  if (!Array.isArray(users)) {
    return <Loading />; // Show loading if users is not an array
  }

  // filter to search users in array
  const filteredUsers = users.filter(({ firstName, lastName, email }) =>
    `${firstName} ${lastName} ${email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Get Data with Axios</h1>
           {users.length === 0 ? (
        <Loading /> // Show loading if users array is empty
      ) : filteredUsers.length > 0 ? (
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "20px", 
          
        }}>
          {filteredUsers.map(({ id, firstName, lastName, email }) => (
            <div
            key={id}
            style={{ flex: "1 1 calc(25% - 20px)", maxWidth: "calc(25% - 20px)", boxSizing: "border-box" }}>
              <UserCardF firstName={firstName} lastName={lastName} email={email} />
            </div>
          ))}
        </div>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default GetDataAxios;
