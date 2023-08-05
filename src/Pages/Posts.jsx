import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingItem from "../components/ListingItem";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let ignore = false;
    fetchUsers();
    async function fetchUsers() {
      const res = await axios.get(
        "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts"
      );
      if (!ignore) {
        console.log(res.data);
        setPosts(res.data);
      }
    }
    return () => {
      ignore = true;
    };
  }, []);
  return <ListingItem items={posts} isUser={false} />;
};

export default Posts;
