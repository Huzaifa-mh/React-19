import {useState} from "react";
import "./App.css";
import { LoginCard } from "./LoginCard";
import { Filter } from "./filter";
import { Inputs } from "./Inputs";

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

const SwitchExample = () => {
  const [role, setRole] = useState("user");

  const renderContent = () => {
    switch (role) {
      case "admin":
        return <p>Welcome, Admin!</p>;
      case "user":
        return <p>Welcome, User!</p>;
      case "guest":
        return <p>Welcome, Guest!</p>;
      default:
        return <p>Role not recognized.</p>;
    }
  };

  return (
    <>
      {renderContent()}
      <div style={{ margin: "10px 15px" }}>
        <button onClick={() => setRole("admin")}>Set Admin</button>
        <button onClick={() => setRole("user")}>Set User</button>
        <button onClick={() => setRole("guest")}>Set Guest</button>
      </div>
    </>
  );
};

function App() {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");

  const[count, setCount] = useState(0);

  const getStatusMessage = () => {
    if (status === "pending") return "Processing...";
    if (status === "success") return "Operation Successful!";
    if (status === "error") return "An error occurred.";
    return "Unknown status.";
  };

  const fruits = ["Apple", "Banana", "Mango"];

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
        <input
          className="searchfield"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <h3>Hello, {username || "Guest"}!</h3>
      </Card>

      <Card>
        <div>
          <h2>{getStatusMessage()}</h2>
          <button onClick={() => setStatus("pending")}>Set Pending</button>
          <button onClick={() => setStatus("success")}>Set Success</button>
          <button onClick={() => setStatus("error")}>Set Error</button>
        </div>
      </Card>

      <Card>
        <SwitchExample />
      </Card>

      <Card>
        <div>
          {fruits.map((fruit, index) => {
            console.log(index);
            return <li key={index}>{fruit}</li>;
          })}
        </div>
      </Card>

      <Card>
        <Filter />
      </Card>

      <Card>
        <Inputs />
      </Card>

      <Card>
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        
      </Card>
    </>
  );
}

export default App;
