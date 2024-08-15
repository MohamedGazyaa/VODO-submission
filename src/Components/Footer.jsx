import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-4 bg-primary flex p-8 items-center">
      <div className="flex flex-col gap-6 w-full  p-8 md:grid grid-cols-2 relative ">
        <div className="flex flex-col px-4 md:absolute left-4">
          <Link className="text-secondary hover:underline">About Us</Link>
          <Link className="text-secondary hover:underline">Vision</Link>
          <Link className="text-secondary hover:underline">Mission</Link>
        </div>
        <div className="flex flex-col px-4 md:absolute right-4">
          <Link className="text-secondary hover:underline">Movies</Link>
          <Link className="text-secondary hover:underline">Shows</Link>
          <Link className="text-secondary hover:underline">Documentaries</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
