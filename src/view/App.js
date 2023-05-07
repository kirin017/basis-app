import logo from './logo.svg';
import './App.scss';

const name = 'Huy'
const element = <h1>Hello , {name}</h1>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          element
        </p>
        <a
          className="App-link"
          href='https://gaixinhbikini.com/wp-content/uploads/2022/09/52321187927_023da6d2ec_o.jpg'
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
