import './styles/App.css'
import Hero from "./components/Hero.jsx";
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';
import Navbar from "./components/Navbar.jsx";
import LoginContext from "./context/LoginContext.js";
import {useContext} from "react";
import Company from './components/Company.jsx';
function App() {
    const {allowLogin, allowSignup} = useContext(LoginContext)

  return (
    <>
        <div style={{filter: `${allowLogin? 'blur(5px)':'' || allowSignup? 'blur(5px)':'' }`}}>
        <Navbar />
        <Hero />
        </div>
        <div style={{display: `${allowLogin ? 'block' : 'none'}`}}>
        <Login/>
        </div>
        <div style={{display: `${allowSignup ? 'block' : 'none'}`}}>
        <Signup/>
        </div>
        <Company/>

    </>
  )
}

export default App
