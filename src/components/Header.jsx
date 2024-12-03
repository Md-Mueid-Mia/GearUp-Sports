import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Header = () => {
    const {user, logOut}=useContext(AuthContext)
    // console.log(user);
    const link = <>
        <NavLink className='mr-5' to='/'><li>Home</li></NavLink>
        <NavLink className='mr-5' to='/allEquipment'><li>All Sports Equipment</li></NavLink>
        <NavLink className='mr-5' to='/addEquipment'><li>Add Equipment</li></NavLink>
        <NavLink className='mr-5' to='/myEquipmentList'><li>My Equipment List</li></NavLink>
        <NavLink className='mr-5' to='/'><li>Home</li></NavLink>
        <NavLink className='mr-5' to='/'><li>Home</li></NavLink>
          <NavLink className={`${user? 'hidden': 'flex mr-5'}`} to='/signIn'><li>Sign-In</li></NavLink>
          <NavLink className={`${user? 'hidden': 'flex mr-5'}`} to='/signUp'><li>Sign-Up</li></NavLink>
        
    </>
  return (
    <div className="my-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <Link to={'/'} className=" text-2xl font-extrabold">GearUp <span className="text-orange-600">Sports</span></Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
           {link}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {
            user?  <div className="flex gap-6 items-center">
            <div class="tooltip  tooltip-bottom" data-tip={user.displayName}>
              <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
            </div>
            <button onClick={logOut} className="btn bg-orange-600 text-white font-semibold">Log-Out</button>
          </div>: <button className="btn bg-orange-600 text-white font-semibold"><Link to={'/signIn'}>Log-In</Link></button>
          }
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {link}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
