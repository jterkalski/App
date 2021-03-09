import React from "react";

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

const showButtonStyle = {
  ...buttonStyle,
  position: "fixed",
  top: 34,
};

const sideMenuStyles = {
  menu: {
    position: "fixed",
    top: 60,
    bottom: 0,
    padding: "5px",
    border: "1px solid #0657FF",
    borderRadius: "0 30px 30px 0",
    background: "#C9E5FF",
    width: "280px",
    transition: "0.5s",
    overflow: "hidden",
  },
};

sideMenuStyles.menu.visible = {
  ...sideMenuStyles.menu,
  left: "0",
};

sideMenuStyles.menu.hidden = {
  ...sideMenuStyles.menu,
  left: "-300px",
};

const liStyle = {
  margin: "10px",
  padding: "5px",
  border: "2px solid #3085d6",
  borderRadius: "5px",
  background: "#5fa8ed",
  boxShadow: "5px 5px 5px grey",
  textShadow: "1px 1px 1px black",
  fontWeight: "900",
  color: "white",
  listStyle: "circle inside",
};

const SideMenu = ({ visible }) => {
  return (
    <div style={{ height: "200px" }}>
      <div style={sideMenuStyles.menu[visible ? "visible" : "hidden"]}>
        <div>
          <ul>
            <li style={liStyle}>Grupa</li>
            <li style={liStyle}>Meteriały</li>
            <li style={liStyle}>Zadania</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
