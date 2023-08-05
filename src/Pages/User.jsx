import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingItem from "../components/ListingItem";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let ignore = false;
    fetchUsers();
    async function fetchUsers() {
      const res = await axios.get(
        "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users"
      );
      if (!ignore) {
        console.log(res.data);
        setUsers(res.data);
      }
    }
    return () => {
      ignore = true;
    };
  }, []);
  return <ListingItem items={users} isUser={true} />;
};

export default User;
