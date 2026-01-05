import React from "react";

export const LoginCard = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  let content;
  if (loggedIn) {
    content = <h2>Welcome Back!</h2>;
  } else {
    content = <h2></h2>;
  }
  return <>
    {content}
    <button onClick={() => setLoggedIn(!loggedIn)}>
      {loggedIn ? "Logout" : "Login"}
    </button>
  </>;
};
