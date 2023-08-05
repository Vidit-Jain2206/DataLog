import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Details from "../components/Details";

const UserDetail = () => {
  const params = useParams();
  const id = params.id;
  const [userDetail, setUserDetail] = useState({
    name: "",
    about: "",
    avatar: "",
  });

  useEffect(() => {
    let ignore = false;
    fetchUserDetails();
    async function fetchUserDetails() {
      const res = await axios.get(
        `https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`
      );
      if (!ignore) {
        setUserDetail(res.data);
      }
      return () => {
        ignore = true;
      };
    }
  }, [id]);

  return (
    <Details
      pic={userDetail.avatar}
      name={userDetail.name}
      about={userDetail.about}
      isUser={true}
    />
  );
};

export default UserDetail;
