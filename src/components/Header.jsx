import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <header className="flex items-center justify-between bg-black xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center p-8 mt-10">
        <Link to="/">
          <img
            src="logo.jpg"
            className="w-1/2 cursor-pointer" // Ajusta el tamaño según tus necesidades
            alt="Logo"
          />
        </Link>
      </div>
      <nav
        className={`fixed bg-black text-primary w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 font-bold 
        transition-all duration-500 z-50`}
      >
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/#aboutUs" className="">
          About Us
        </Link>
        <Link to="/#services" className="">
          Services
        </Link>
       
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 z-50"
      >
        {showMenu ? <RiCloseLine className="text-primary" /> : <RiMenu3Fill className="text-primary" />}
      </button>
    </header>
  );
};

export default Header;
