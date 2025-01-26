import './styles/App.css';
import Hero from "./components/Hero.jsx";
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Navbar from "./components/Navbar.jsx";
import LoginContext from "./context/LoginContext.js";
import { useContext } from "react";
import Company from './components/Company.jsx';
import { Route, Routes } from "react-router-dom";

function App() {
    const { allowLogin, allowSignup } = useContext(LoginContext);

    return (
        <>
            {/* Blur effect based on context */}
            <div style={{ filter: `${allowLogin ? 'blur(5px)' : '' || allowSignup ? 'blur(5px)' : ''}` }}>
                <Navbar />
                <Routes>
                    {/* Hero component for "/" */}
                    <Route path="/" element={<Hero />} />
                    {/* Company component for "/company" */}
                    <Route path="/company" element={<Company />} />
                </Routes>
            </div>

            {/* Login modal */}
            <div style={{ display: `${allowLogin ? 'block' : 'none'}` }}>
                <Login />
            </div>

            {/* Signup modal */}
            <div style={{ display: `${allowSignup ? 'block' : 'none'}` }}>
                <Signup />
            </div>
        </>
    );
}

export default App;
