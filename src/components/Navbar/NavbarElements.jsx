
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 56px;
    height: 56px;
    margin: 0 2rem 0 0;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        border: none;
        display: block;
    }
`;

export const Nav = styled.nav`
    background: #58e16cff;
    height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* give a little horizontal padding so links don't touch the edges */
    padding: 0.2rem 2rem;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #ffffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: font-size 0.2s, color 0.2s;
    &.active {
        color: #5100ffff;
    }
    &:hover {
        font-size: 1.25em;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #ffffffff;
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

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    margin-left: auto;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;