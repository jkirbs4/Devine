
import NavbarElement from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Games from "./pages/games";
import Connect from "./pages/connect";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
    return (
        <Router>
            <NavbarElement />
            <main style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
