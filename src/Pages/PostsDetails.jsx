import React, { useEffect, useState } from "react";
import Details from "../components/Details";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostsDetails = () => {
  const params = useParams();
  const id = params.id;
  const [postDetail, setPostDetail] = useState({
    title: "",
    desc: "",
    coverPic: "",
  });

  useEffect(() => {
    let ignore = false;
    fetchUserDetails();
    async function fetchUserDetails() {
      const res = await axios.get(
        `https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${id}`
      );
      if (!ignore) {
        setPostDetail(res.data);
      }
      return () => {
        ignore = true;
      };
    }
  }, [id]);

  return (
    <Details
      pic={postDetail.cover}
      name={postDetail.title}
      about={postDetail.description}
      isUser={false}
    />
  );
};

export default PostsDetails;
