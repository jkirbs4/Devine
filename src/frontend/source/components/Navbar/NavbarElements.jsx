
import { FaBars } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 56px;
    height: 56px;
    margin: 0 2rem 0 0;
    border-radius: 12px;
    overflow: hidden;
    background: #ffffffff;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        border: none;
        display: block;
    }
`;

export const Navbar = styled.nav`
    background: #ffffffff;
    height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* give a little horizontal padding so links don't touch the edges */
    padding: 0.2rem 2rem;
    z-index: 12;
`;

export const NavbarButton = styled(RouterLink)`
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: font-size 0.2s, color 0.2s;
    &[aria-current="page"] {
        color: #000;
        font-weight: 600;
    }
    &:hover {
        color: #b2ffb2;
        font-size: 1.25em;
    }
    &.active {
        color: #1b671b;
        font-weight: 700;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #000;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavbarButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    margin-left: auto;
    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    &:hover {
        color: green;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavbarDivider = styled.span`
    display: inline-block;
    height: 2rem;
    width: 2px;
    background-color: #000;
    color: #000;
    margin: 0 0.5rem;
    user-select: none;
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    &:hover {
        color: #000;
    }
`;