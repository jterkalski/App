import React, { useState } from "react";
import { createContext } from "react";
import SideMenu from "./SideMenu";

const navStyle = {
  display: "flex",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
};

const sideMenuStyle = {
  padding: "5px",
  flex: "none",
  background: "#aacdd2",
};

const linksStyle = {
  padding: "5px",
  flex: "none",
  background: "#ddf9c4",
};

const linkStyle = {
  padding: "0 5px",
};

const spacerStyle = {
  flex: "1",
  background: "#fff9c4",
};

const userMenuStyle = {
  padding: "5px",
  flex: "none",
  background: "#bbdefb",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "2px solid #3085d6",
  borderRadius: "5px",
  background: "#3085d6",
  boxShadow: "5px 5px 5px grey",
  textShadow: "1px 1px 1px black",
  fontWeight: "900",
  color: "white",
};

export const SideMenuContext = createContext();

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(true);
  return (
    <div className="navbar-container" style={navStyle}>
      <div className="side-menu" style={sideMenuStyle}>
        <button style={buttonStyle} onClick={() => setSideMenu(!sideMenu)}>
          Menu
        </button>
      </div>
      <div className="links" style={linksStyle}>
        <a style={linkStyle} href="#">
          Home
        </a>
        <a style={linkStyle} href="#">
          Gallery
        </a>
        <a style={linkStyle} href="#">
          About
        </a>
      </div>
      <div className="spacer" style={spacerStyle}></div>
      <div className="user-menu" style={userMenuStyle}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
