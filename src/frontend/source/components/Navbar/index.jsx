import { useState, useRef, useEffect } from "react";
import { Navbar, NavbarButton, NavbarButtons, NavbarLogo, NavbarDivider, NavbarLogOutButton } from "./NavbarElements";
import logo from '../../assets/logo.png';
import logged_out_user from '../../assets/logged_out_user.jpg';
import { useNavigate, useLocation } from "react-router-dom";

const NavbarElement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    const location = useLocation();

    const visibleLinksMap = {
        "/home_signedin": ["Home", "Social","Games", "Scores", "Goals", "Log Out"], 
        "/social": ["Home", "Social","Games", "Scores", "Goals", "Log Out"],
        "/games_signedin": ["Home", "Social","Games", "Scores", "Goals", "Log Out"], 
        "/scores": ["Home", "Social","Games", "Scores", "Goals", "Log Out"], 
        "/goals": ["Home", "Social","Games", "Scores", "Goals", "Log Out"], 
        "/login": ["Home", "Games", "Register", "Sign-In"],
        "/register": ["Home", "Games", "Register", "Sign-In"],
    };

    const visibleLinks = visibleLinksMap[location.pathname] || ["Home", "Social", "Games", "Scores", "Goals"];

    const linkConfig = [
        { label: "Home", path: "/home_signedin" },
        { label: "Social", path: "/social" },
        { label: "Games", path: "/games_signedin" },
        { label: "Scores", path: "/scores" },
        { label: "Goals", path: "/goals" },
        { label: "Log Out", path: "/home_signedin"},
        { label: "Login", path: "/login" },
        { label: "Register", path: "/register" },
        { label: "Sign-In", path: "/login" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navigate = useNavigate();

    return (
        <Navbar>
            <NavbarLogo>
                <img src={logo} alt="Devine" style={{ height: '4rem' }} />
            </NavbarLogo>
            <NavbarButtons>
                {linkConfig.map((link) => {
                    if (!visibleLinks.includes(link.label)) return null;
                    if (link.label === "Log Out") {
                        return (
                            <div key={link.path} style={{ display: 'flex', alignItems: 'center' }}>
                                <NavbarDivider />
                                <NavbarLogOutButton to={link.path}>{link.label}</NavbarLogOutButton>
                            </div>
                        );
                    }
                    if (link.label === "Register") {
                        return (
                            <div key={link.path} style={{ display: 'flex', alignItems: 'center' }}>
                                <NavbarDivider />
                                <NavbarButton to={link.path}>{link.label}</NavbarButton>
                            </div>
                        );
                    }
                    return (
                        <NavbarButton key={link.path} to={link.path}>{link.label}</NavbarButton>
                    );
                })}
            </NavbarButtons>

            <div style={{ position: 'relative' }} ref={dropdownRef}>
                <img
                    src={logged_out_user}
                    alt="Logged Out User"
                    style={{ height: '3rem', borderRadius: '50%', margin: '1rem', cursor: 'pointer' }}
                    onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '4rem',
                            background: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                            zIndex: 10,
                        }}
                    >
                        <button
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '0.5rem 1rem',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                color: '#333',
                                textAlign: 'center'
                            }}
                            onClick={() => { setIsOpen(false); navigate('/login'); }}
                        >
                            Sign-In
                        </button>
                        <button
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '0.5rem 1rem',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                color: '#333',
                                textAlign: 'center'
                            }}
                            onClick={() => { setIsOpen(false); navigate('/register'); }}
                        >
                            Register
                        </button>
                    </div>
                )}
            </div>
        </Navbar>
    );
};

export default NavbarElement;