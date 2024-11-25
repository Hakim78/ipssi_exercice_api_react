import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.nom}</h2>
          <h3>{user.prenom}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserList;
