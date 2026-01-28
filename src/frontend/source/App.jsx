
import NavbarElement from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Home_SignedIn from "./pages/home_signedin";
import Games from "./pages/games_signedin";
import Social from "./pages/social";
import Scores from "./pages/scores";
import Goals from "./pages/goals";
import Login from "./pages/login";
import Register from "./pages/register";
import Games_SignedIn from "./pages/games_signedin";

function AppShell() {
    const location = useLocation();

    return (
        <>
            <NavbarElement />
            <main style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route exact path="/" element={<Home_SignedIn />} />
                    <Route path="/home_signedin" element={<Home_SignedIn />} />
                    <Route path="/games_signedin" element={<Games_SignedIn />} />
                    <Route path="/social" element={<Social />} />
                    <Route path="/scores" element={<Scores />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
            <Footer />
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
