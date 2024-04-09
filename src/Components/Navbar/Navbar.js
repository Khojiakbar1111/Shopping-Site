import React from "react";
import { MdLocalShipping } from "react-icons/md";
import imageLogo from "../image/logo.webp";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = ({search, setSearch, searchProduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();

  return (
    <div className="header">
      <div className="top-header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping When Shopping Upto $1000</p>
        </div>
      </div>
      <div className="middle-header">
        <div className="logo">
          <img src={imageLogo} alt="" />
        </div>
        <div className="search-box">
          <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)} placeholder="Search" />
          <button><AiOutlineSearch onClick={searchProduct}/></button>
        </div>
        {
          isAuthenticated ?
            // If the user is Login then Logout Button shown and also use profile
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
            :
            // Login Button
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
        }
      </div>
      <div className="last-header">
        <div className="user-profile">
          {
            isAuthenticated ?
              // User profile will shown here
              <>
                <div className="icon">
                  <LuUser2 />
                </div>
                <div className="info">
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                </div>
              </>
              :
              <>
                <div className="icon">
                  <LuUser2 />
                </div>
                <div className="info">
                  <p>Please Login </p>
                </div>
              </>
          }
        </div>
        <div className="nav">
         <ul>
          <li><NavLink to="/" className="links">Home</NavLink></li>
          <li><NavLink to="/shop"className="links">Shop</NavLink></li>
          <li><NavLink to="/card"className="links">Card</NavLink></li>
          <li><NavLink to="/about"className="links">About</NavLink></li>
          <li><NavLink to="/contact"className="links">Contact</NavLink></li>
         </ul>
        </div>
        <div className="offer">
         <p>Flat 10% over all iphone</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;