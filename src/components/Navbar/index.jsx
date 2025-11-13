
import { Nav, NavLink, NavMenu, Logo } from "./NavbarElements";
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Logo>
                    <img src={logo} alt="Devine" style={{ height: '4rem' }} />
                </Logo>
                <NavMenu>
                    <NavLink to="/home" activeStyle>Home</NavLink>
                    <NavLink to="/login" activeStyle>Login</NavLink>
                    <NavLink to="/games" activeStyle>Games</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;