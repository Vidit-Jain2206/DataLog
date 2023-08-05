import React from "react";
import { Link } from "react-router-dom";

const ListingItem = ({ items, isUser }) => {
  return (
    <div className="max-w-[1440px] h-auto bg-black border border-black">
      <div className="h-auto w-[80%] mx-auto my-10 ">
        <h1 className="text-xl  lg:text-2xl text-white text-center">
          <span className="relative px-10 py-3 before:rounded-xl before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-180 before:transition before:duration-1000">
            {isUser ? "Users" : "Posts"}
          </span>
        </h1>
        <ul className="list-disc flex flex-col space-y-2 my-10">
          {items.map((item, id) => {
            return (
              <Link
                to={`/${isUser ? "user" : "post"}/${id + 1}`}
                className="w-[80%]"
              >
                <div className="flex flex-row justify-center items-center">
                  <p className="w-[5%] text-white text-3 xl">.</p>
                  <li className="w-[95%] truncate text-white px-5 py-2 text-md md:text-xl relative transition duration-1000 hover:z-10 hover:text-black before:absolute before:bottom-0 before:left-0 before:bg-white before:w-full before:h-0 before:border-b-2 before:border-white before:transition-all before:duration-1000  hover:before:z-[-1] hover:before:h-full ">
                    {isUser ? item.name : item.title}
                  </li>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListingItem;
