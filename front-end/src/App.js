import { SideMenuContext } from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import Login from "./Components/Login";

function App() {
  const sideMenu = useContext(SideMenuContext);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
