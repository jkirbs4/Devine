
import NavbarElement from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Home from "./pages";
import Games from "./pages/games";
import Social from "./pages/social";
import Scores from "./pages/scores";
import Goals from "./pages/goals";
import Login from "./pages/login";
import Register from "./pages/register";

function AppShell() {
    const location = useLocation();
    const hideFooter = location.pathname === "/login" || location.pathname === "/register";

    return (
        <>
            <NavbarElement />
            <main style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/social" element={<Social />} />
                    <Route path="/scores" element={<Scores />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
            {!hideFooter && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppShell />
        </Router>
    );
}

export default App;
