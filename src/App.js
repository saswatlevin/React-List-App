import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Dave";

  const handleNameChange = () => {
    const names = ["Ann", "Mary", "Dave"];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
          Hello, my name is {handleNameChange()}!
        </p>
      <p>{name}</p>
      <p>{"string"}</p>
      <p>{2.43}</p>
      <p>{1}</p>
      <p>{[1, 2, 3]}</p>
      </header>
    </div>
    
  );
}

export default App;
