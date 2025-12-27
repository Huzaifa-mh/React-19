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
    <>
      <h1>{name}</h1>
      <p>{role}</p>
      <p>{verified ? "Verified User" : "Unverified User"}</p>
    </>
  );
}
function App() {
  return (
    <>
      <Greetings name="Alice" age={25} />
      <Usercard name="Bob" role="admin" verified={true} />
    </>
  )
}

export default App
