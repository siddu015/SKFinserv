import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioLogin from "../components/portfolioLogin.jsx";

const Header = ({ isRootPage }) => {
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

    const handleNavLinkClick = () => {
        if (menuOpen) {
            setMenuOpen(false); // Close the dropdown when a nav link is clicked
        }
    };

    return (
        <HeaderWrapper scroll={scroll} isRootPage={isRootPage}>
            <Container>
                <Logo scroll={scroll} isRootPage={isRootPage}>SK Finserv</Logo>
                <NavContainer>
                    <Nav scroll={scroll} isRootPage={isRootPage} menuOpen={menuOpen}>
                        <ul>
                            <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                            <li><a href="/services" onClick={handleNavLinkClick}>Services</a></li>
                            <li><a href="/aboutUs" onClick={handleNavLinkClick}>About Us</a></li>
                            <li><a href="/contactUs" onClick={handleNavLinkClick}>Contact Us</a></li>
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
                        <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                        <li><a href="/services" onClick={handleNavLinkClick}>Services</a></li>
                        <li><a href="/aboutUs" onClick={handleNavLinkClick}>About Us</a></li>
                        <li><a href="/contactUs" onClick={handleNavLinkClick}>Contact Us</a></li>
                    </ul>
                </DropdownMenu>
            )}
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-family: 'Castoro', serif;
    padding: ${({ scroll }) => (scroll ? "15px 20px" : "15px 20px")};
    background-color: ${({ scroll, isRootPage }) =>
            isRootPage && !scroll ? "transparent" : "white"};
    transition: background-color 0.3s ease, padding 0.3s ease;
    z-index: 1000;
    box-shadow: ${({ scroll, isRootPage }) =>
            isRootPage && !scroll ? "none" : "0 2px 14px rgba(0, 0, 0, 0.3)"};
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
`;

const Logo = styled.h1`
    font-size: ${({ scroll }) => (scroll ? "1.5rem" : "1.7rem")};
    font-weight: bold;
    color: ${({ scroll, isRootPage }) => (scroll || !isRootPage ? "black" : "white")};
    transition: color 0.3s ease, font-size 0.3s ease;
    padding-left: 10px;
    margin-right: 3rem;

    @media (max-width: 1024px) {
        font-size: ${({ scroll }) => (scroll ? "1.3rem" : "1.5rem")};
        margin-right: 2rem;
    }

    @media (max-width: 768px) {
        font-size: ${({ scroll }) => (scroll ? "1.2rem" : "1.5rem")};
        margin-right: 1.5rem;
    }

    @media (max-width: 430px) {
        font-size: 1.1rem;
    }
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        align-items: center;

        li {
            a {
                color: ${({ scroll, isRootPage }) => (scroll || !isRootPage ? "black" : "white")};
                text-decoration: none;
                font-size: 1rem;
                transition: color 0.3s ease;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media (max-width: 768px) {
        ul {
            display: none;
        }
    }

    @media (max-width: 430px) {
        ul li a {
            font-size: 0.9rem;
        }
    }
`;

const ToggleMenuButton = styled.button`
    font-size: 1.8rem;
    background: none;
    border: none;
    color: ${({ scroll, isRootPage }) => (scroll || !isRootPage ? "black" : "white")};
    cursor: pointer;
    display: block;
    position: relative;
    order: 1;
    left: 20px;

    @media (min-width: 769px) {
        display: none;
    }

    @media (max-width: 430px) {
        font-size: 1.6rem;
    }
`;

const PortfolioLoginButton = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 2rem;

    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: -20px;
    }

    @media (max-width: 430px) {
        margin-left: 30px;
        margin-right: -30px;
    }
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding: 1rem;
    z-index: 999;
    width: 150px;

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

    @media (max-width: 430px) {
        width: 130px;
        ul li a {
            font-size: 0.9rem;
        }
    }
`;

export default Header;
