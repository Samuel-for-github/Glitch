import './styles/App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';
import Company from './components/Company.jsx'; 

function App() {


  return (
    <>
        <Navbar/>
        <Hero/>
       
       <Login/>
       <Signup/>
       <Company/>
    </>
  )
}

export default App
