import logo from './logo.svg';
import './App.css';
import Banner from './component/Banner'
import Cart from './component/Cart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Banner />
        
      </header>
      <Cart />
    </div>
  );
}

export default App;
