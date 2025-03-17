import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-white font-epilogue mt-8 mb-2">
        <div>
          <h4 className="ml-7 text-spare text-2xl font-semibold">
            SpareWork
          </h4>
        </div>

        <div>
          <ul className="flex gap-10 text-nav">
            <li>
              <NavLink
                to="/getservice"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 underline'
                    : 'hover:text-blue-500'
                }
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
              >
                Resource
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-10 mr-8">
          <button className="text-spare font-semibold">SIGN IN</button>
          <button className="bg-spare text-white w-auto p-3">JOIN</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
