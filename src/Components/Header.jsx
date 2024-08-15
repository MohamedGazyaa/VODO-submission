import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary p-2 flex justify-between items-center">
      <Link className="flex items-center" to="/">
        <img
          className="h-20"
          src={`${process.env.PUBLIC_URL}/Movies4Free.png`}
          alt="Movies 4 Free logo"
        />
        <span className="font-bold text-2xl text-secondary">Movies4Free</span>
      </Link>
      <div className="hidden sm:flex gap-4 py-4 px-8">
        <div className="flex border-r">
          <Link className="p-4 rounded-2xl hover:bg-secondary mr-2">
            Movies
          </Link>
        </div>
        <div className="flex border-r">
          <Link className="p-4  rounded-2xl hover:bg-secondary mr-2">
            Shows
          </Link>
        </div>
        <Link className="p-4 rounded-2xl hover:bg-secondary">
          Documentaries
        </Link>
      </div>
    </div>
  );
};

export default Header;
