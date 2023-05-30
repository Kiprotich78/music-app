import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ addSidebar }) => {
  return (
    <div className='nav'>   
       <div className="min-h-full w-full bg-gradient-to-r from-transparent to-gray-400 flex items-center justify-end px-2 md:px-10 gap-1 md:gap-3 relative">
      <div
        onClick={addSidebar}
        className="absolute left-2 h-full py-2 w-10 md:w-12 flex flex-col justify-evenly md:hidden cursor-pointer"
      >
        <div className="w-full h-1 bg-black"></div>
        <div className="w-full h-1 bg-black"></div>
        <div className="w-full h-1 bg-black"></div>
      </div>
      <Link to="./signup">
        <button className="font-[200] py-2 px-3 text-xl md:py-3 md:px-4 md:text-2xl rounded-[15px] hover:bg-gray-300 focus:bg-gray-300 transition-all">
          Sign Up
        </button>
      </Link>
      <Link to="./login">
        <button className="py-2 px-3 text-xl md:py-3 md:px-4 md:text-2xl rounded-[15px] hover:bg-slate-200 focus:bg-gray-300 transition-all">
          Log In
        </button>
      </Link to >
    </div>
  </div>

  );
};

export default Header;
