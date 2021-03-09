import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Components/Login";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import SideMenu from "./Components/SideMenu";

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleSideMenu = () => setMenuVisible(!menuVisible);
  return (
    <div style={{ display: "flex" }}>
      <Navbar onSideMenu={handleSideMenu} />
      <SideMenu visible={menuVisible} onClose={handleSideMenu} />
      <Container />
    </div>
  );
};

export default App;
