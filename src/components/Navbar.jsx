import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-white font-epilogue mt-8 mb-2 relative">
        <div className="flex justify-between items-center px-7">
          <h4 className="text-spare text-2xl font-semibold">
            SpareWork
          </h4>

          {/* Hamburger Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <HiX className="text-3xl text-spare" />
            ) : (
              <HiMenu className="text-3xl text-spare" />
            )}
          </div>
        </div>

        {/* Menu Links */}
        <div className={`flex-col md:flex md:flex-row justify-center ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row gap-5 md:gap-10 text-nav items-center md:items-start mt-4 md:mt-0">
            <li>
              <NavLink
                to="/getservice"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 underline'
                    : 'hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)} // Close on click
              >
                Get Service/Talent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/yourservice"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 underline'
                    : 'hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                List your services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whyspare"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 underline'
                    : 'hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                Why SpareWork
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resource"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 underline'
                    : 'hover:text-blue-500'
                }
                onClick={() => setMenuOpen(false)}
              >
                Resource
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Sign in / Join buttons */}
        <div className={`flex flex-col md:flex-row gap-5 md:gap-10 mr-8 mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <button className="text-spare font-semibold">SIGN IN</button>
          <button className="bg-spare text-white w-auto p-3">JOIN</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
