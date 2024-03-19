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
    <nav className="flex items-center bg-gray-400 h-20 w-screen px-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-4" height={50} width={40} />
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
          className="h-6 ml-4 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute top-20 right-0 bg-gray-400 rounded-lg p-2">
            <ul>
              {featureLists.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-black hover:text-white"
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
