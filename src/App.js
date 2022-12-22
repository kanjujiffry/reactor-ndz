import logo from './logo.svg';
import './App.css';
import getUser from './api/api'


function App() {

  getUser();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My bird app.
        </p>
        
      </header>
    </div>
  );
}

export default App;
