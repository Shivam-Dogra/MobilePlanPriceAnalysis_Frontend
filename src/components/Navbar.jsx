import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { NAV_LINKS } from "../constants";
import logo from "../assets/mobileLogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center bg-gray-400 h-20 w-screen px-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-4" height={50} width={40} />
      </div>
      <div className="justify-center items-center flex-grow">
        <ul className="flex justify-center items-center gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-2">
              {/* Use Link component instead of anchor */}
              <Link
                to={link.href} // Specify the target path for the link
                className="font-serif text-2xl text-black cursor-pointer transition-all hover:font-bold hover:bg-black hover:rounded-lg px-4 py-2 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
