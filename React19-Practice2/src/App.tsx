import React, { Children } from 'react';
import './App.css'

//this is one way of passing the props with type annotations
const Greetings = ({name ,age}:{name:string, age:number}) =>
{
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Your age is {age}.</p>
    </>  
  );
}

type UsercardProps = {
  name:string,
  // role:string 
  role:'admin' | 'user',
  verified:boolean
}
const Usercard = ({name, role, verified}: UsercardProps) =>{
  return (
    <div style={
      {display: 'flex',
      gap: '14px',
      alignItems: 'center'}
    }>
      <h1>{name}</h1>
      <p>{role} {verified ? "✓" : ""}</p>
    </div>
  );
}

//we can also do content projection
const Card = ({ children }: React.PropsWithChildren) =>{
  return (
    <div className='card'>
      <Button />
      <section>{children}</section>
     </div>
  );
};

const Button = () =>{
  // const handleClick = () =>{
  //   alert("Button Clicked");
  // };
  // return <button onClick={handleClick}>Click Me</button>;

  return <button onClick={() => alert("Button Clicked")}>Click Me</button>;
};
function App() {
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
    </>
  )
}

export default App
