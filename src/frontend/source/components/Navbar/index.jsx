import { useState, useRef, useEffect } from "react";
import { Navbar, NavbarButton, NavbarButtons, NavbarLogo, NavbarDivider } from "./NavbarElements";
import logo from '../../assets/logo.png';
import logged_out_user from '../../assets/logged_out_user.jpg';
import { useNavigate } from "react-router-dom";

const NavbarElement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

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
                <NavbarButton to="/home">Home</NavbarButton>
                <NavbarButton to="/social">Social</NavbarButton>
                <NavbarButton to="/games">Games</NavbarButton>
                <NavbarButton to="/scores">Scores</NavbarButton>
                <NavbarButton to="/goals">Goals</NavbarButton>
                <NavbarDivider />
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