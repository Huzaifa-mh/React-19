import React from "react";
import "./App.css";
import { LoginCard } from "./LoginCard";

//this is one way of passing the props with type annotations
const Greetings = ({ name, age }: { name: string; age: number }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Your age is {age}.</p>
    </>
  );
};

type UsercardProps = {
  name: string;
  // role:string
  role: "admin" | "user";
  verified: boolean;
};
const Usercard = ({ name, role, verified }: UsercardProps) => {
  const greetUser = (userName: string) => {
    alert(`Hello, ${userName}!`);
  };

  return (
    <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
      <h1>{name}</h1>
      <p>
        {role}
        {/* {verified ? "✓" : ""} */}
      </p>
      <button
        onClick={(event) => {
          greetUser(name);
          console.log(event.target);
        }}
      >
        Show user info
      </button>
      {verified ? <p>✓</p> : <p>The user is not verified</p>}

      {/* for this i need to use hooks */}
      {/* {!verified && <button onClick={()=>{
        alert("Verified");
        verified = true;
      }}>Verify</button>} */}
    </div>
  );
};

//we can also do content projection
const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="card">
      <section>{children}</section>
    </div>
  );
};

const Button = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  return <button onClick={handleClick}>Click Me</button>;

  // return <button onClick={() => alert("Button Clicked")}>Click Me</button>;
};
function App() {
  const [username, setUsername] = React.useState("");

  return (
    <>
      <Card>
        <Greetings name="Alice" age={25} />
      </Card>

      <Card>
        <Usercard name="Bob" role="admin" verified={true} />
        <Usercard name="Huzaifa" role="user" verified={false} />
        <Usercard name="Muhammad" role="admin" verified={true} />
      </Card>

      <Card>
        <LoginCard />
      </Card>
      <Card>
        <input className="searchfield" type="text" value={username} 
        onChange={(e)=> setUsername(e.target.value)}
        placeholder="Enter your name"/>
        <h3>Hello, {username || 'Guest'}!</h3>
      </Card>
    </>
  );
}

export default App;
