// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';

function App() {

  const mensajeBienvenida = 'Bienvenidos a React!!!'

  const stylesLi = {
    color: 'red'
  }

  const alertMsg = () => { alert('Estamos aprendiendo') }

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline">{mensajeBienvenida}</h1>
      <ul>
        <li style={stylesLi}>React</li>
        <li>JSX</li>
        <li>Webpack</li>
      </ul>
      <Footer action={alertMsg}></Footer>
    </div>

  );
}

export default App;
