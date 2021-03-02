import React from "react";
import "./Login.css";

const loginStyle = {
  position: "fixed",
  top: "200px",
  left: "300px",
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
