import React from "react";

const App = () => {
  const loggedIn = true
  return (
  <>
  {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
  {loggedIn && <p>Welcome Back</p>}
  </>
  );
};

export default App;
