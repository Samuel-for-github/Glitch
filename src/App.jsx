import './styles/App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';

function App() {


  return (
    <>
        <Navbar/>
        <Hero/>
       
       <Login/>
       <Signup/>
    </>
  )
}

export default App
