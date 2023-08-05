import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen max-w-[1440px] bg-black flex justify-center items-center ">
      <div className="w-[80%] h-[80%] flex flex-col space-y-10 text-white justify-center items-center">
        <Link
          to="/users"
          className="text-xl lg:text-3xl px-16 py-4 before:rounded-xl relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-180 before:transition before:duration-700"
        >
          Users
        </Link>
        <Link
          to="/posts"
          className="text-xl lg:text-3xl px-16 py-4 relative before:rounded-xl before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-180 before:transition before:duration-700"
        >
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Home;
