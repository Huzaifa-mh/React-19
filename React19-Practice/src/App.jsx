import "./App.css";

//Component Creation
  const Hello = () => {
    return (
      <>
        <h2>Hello World</h2>
      </>
    );
  };
//Component Creation with Props
const Greetings = ({name, age}) => {
  return (
    <>
      <h2>Hello {name}, you are {age} years old</h2>
    </>
  );
};


function App() {
  const item = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const styles = {
    backgroundColor: "lightblue",
    color: "darkblue",
    height: "48px",
    width: "200px",
    textAlign: "center",
    alignItems: "center",
    paddingTop: "15px",
  };

  return (
    <>
      <Hello />
      <Hello />
      <Hello />
      <Greetings name="Alice" age={25} />
      
      <input type="text" placeholder="Name plz" />
      <p style={styles}>Items: {item.length}</p>
      <ul>
        {item.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
