import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mobileLogo.png";
import menuIcon from "../assets/menu.png";
import { NAV_LINKS, featureLists } from "../constants";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center bg-gray-300 h-20 w-screen px-4 sticky top-0 z-50">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-8 mr-4"
          height={50}
          width={40}
        />
      </div>
      <div className="justify-center items-center flex-grow">
        <ul className="flex justify-center items-center gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-2">
              <Link
                to={link.href}
                className="font-serif text-2xl text-black cursor-pointer transition-all hover:font-bold hover:bg-black hover:rounded-lg px-4 py-2 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <img
          src={menuIcon}
          alt="Menu"
          className="h-6 ml-4 mr-6 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute top-20 right-4 bg-gray-300 p-4 w-80 h-96 z-10 border border-white overflow-y-auto">
            <ul>
              {featureLists.map((link) => (
                <li key={link.key} className="mt-4">
                  <Link
                    to={link.href}
                    className="font-serif text-lg text-black cursor-pointer transition-all hover:font-bold hover:bg-black hover:rounded-lg px-4 py-2 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
