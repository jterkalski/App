import React from "react";
import "./Login.css";

const loginStyle = {
  position: "fixed",
  top: "200px",
  left: "300px",
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

function Login() {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  return (
    <form onSubmit={handleSubmit} style={loginStyle}>
      <div>
        <label>Username: </label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
