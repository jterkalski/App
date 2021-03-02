import { SideMenuContext } from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import Login from "./Components/Login";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";

function App() {
  const sideMenu = useContext(SideMenuContext);
  return (
    <div>
      <Container />
      {/* <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Container />
          </Route>
          <Route path="/">
            <Container />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
  );
}

export default App;
