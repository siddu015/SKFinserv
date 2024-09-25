import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioLogin from "../components/portfolioLogin.jsx";

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderWrapper scroll={scroll}>
            <Container>
                <Logo scroll={scroll}>SK Finserv</Logo>
                <Nav scroll={scroll}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><PortfolioLogin /></li>
                    </ul>
                </Nav>
            </Container>
        </HeaderWrapper>
    );
};

// Styled Components
const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${({ scroll }) => (scroll ? "5px 0" : "15px 0")}; /* Reduced padding */
    background-color: ${({ scroll }) => (scroll ? "white" : "transparent")};
    transition: background-color 0.3s ease, padding 0.3s ease;
    z-index: 1000;
    box-shadow: ${({ scroll }) => (scroll ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none")};
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px; /* Reduced horizontal padding */
`;

const Logo = styled.h1`
    font-size: 1.5rem; /* Reduced font size */
    font-weight: bold;
    color: ${({ scroll }) => (scroll ? "black" : "white")};
    transition: color 0.3s ease;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 2.5rem; /* Reduced gap */
        align-items: center;

        li {
            a {
                color: ${({ scroll }) => (scroll ? "black" : "white")};
                text-decoration: none;
                font-size: 1rem; /* Reduced font size */
                transition: color 0.3s ease;

                &:hover {
                    text-decoration: underline;
                }
            }

            &:last-child {
                display: inline-flex;
                align-items: center;
            }
        }
    }

    @media (max-width: 768px) {
        ul {
            flex-direction: column;
            align-items: center;
            gap: 10px; 
        }
    }
`;

export default Header;