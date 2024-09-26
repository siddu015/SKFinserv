import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioLogin from "../components/portfolioLogin.jsx";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <HeaderWrapper scroll={scroll}>
            <Container>
                <Logo scroll={scroll}>SK Finserv</Logo>
                <NavContainer>
                    <Nav scroll={scroll} menuOpen={menuOpen}>
                        <ul>
                            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                        </ul>
                    </Nav>
                    <ToggleMenuButton scroll={scroll} onClick={toggleMenu}>
                        &#9776; {/* Hamburger icon */}
                    </ToggleMenuButton>
                    <PortfolioLoginButton>
                        <PortfolioLogin />
                    </PortfolioLoginButton>
                </NavContainer>
            </Container>
            {menuOpen && (
                <DropdownMenu>
                    <ul>
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                    </ul>
                </DropdownMenu>
            )}
        </HeaderWrapper>
    );
};

// Styled Components
const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${({ scroll }) => (scroll ? "5px 0" : "15px 0")};
    background-color: ${({ scroll }) => (scroll ? "white" : "transparent")};
    transition: background-color 0.3s ease, padding 0.3s ease;
    z-index: 1000;
    box-shadow: ${({ scroll }) => (scroll ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none")};
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto; /* Centers the container */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px; /* Keep horizontal padding for smaller screens only */
`;

const Logo = styled.h1`
    font-size: 1.75rem !important;
    font-weight: bold;
    color: ${({ scroll }) => (scroll ? "black" : "white")};
    transition: color 0.3s ease;
    margin-left: 16px; /* Adjust left margin */
    margin-right: 32px;
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ToggleMenuButton = styled.button`
    font-size: 1.8rem;
    background: none;
    border: none;
    color: ${({ scroll }) => (scroll ? "black" : "white")};
    cursor: pointer;
    display: block;
    position: relative;
    right: 0;
    order: 1; /* Place the portfolio login before the menu toggle button */
    

    @media (min-width: 769px) {
        display: none; /* Hide the menu button on larger screens */
    }
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 2.5rem;
        align-items: center;

        li {
            a {
                color: ${({ scroll }) => (scroll ? "black" : "white")};
                text-decoration: none;
                font-size: 1.1rem;
                transition: color 0.3s ease;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media (max-width: 768px) {
        ul {
            display: none; /* Hide on mobile as the dropdown will handle it */
        }
    }
`;

const PortfolioLoginButton = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 2rem;

    @media (max-width: 768px) {
        margin-right: auto;
    }
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100px; /* Adjust based on the header height */
    right: 10px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 1rem;
    z-index: 999;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
            a {
                color: black;
                text-decoration: none;
                font-size: 1rem;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default Header;