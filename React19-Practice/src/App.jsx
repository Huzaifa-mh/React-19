import "./App.css";

function App() {
  const item = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
    const styles = {
        backgroundColor: "lightblue",
        color: "darkblue",
        height: "48px",
        width: "200px",
        textAlign:"center",
        alignItems:"center",
        paddingTop:"15px"
    }

  const Hello =() => {
      return (
        <>
        <h2>Hello World</h2>
      </>);
    }
  return (
    <>
      <Hello />
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
