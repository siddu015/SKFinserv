import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import PortfolioLoginButton from "../components/Header/PortfolioLoginButton.jsx";
import Logo from "../components/Header/Logo.jsx";
import Nav from "../components/Header/Nav.jsx";
import MobileDropDownMenu from "../components/Header/MobileDropdownMenu.jsx";

const Header = ({ isRootPage }) => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prev) => {
            if (prev) {
                setServicesOpen(false); // Reset services dropdown when closing
            }
            return !prev; // Toggle menuOpen state
        });
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
        setServicesOpen(false);
    }, []);

    const toggleServicesDropdown = useCallback(() => {
        setServicesOpen((prev) => !prev);
    }, []);

    const handleNavLinkClick = useCallback(() => {
        closeMenu();
    }, [closeMenu]);

    return (
        <HeaderWrapper scroll={scroll} isRootPage={isRootPage}>
            <Container>
                <Logo scroll={scroll} isRootPage={isRootPage} />
                <NavContainer>
                    <Nav scroll={scroll} isRootPage={isRootPage} menuOpen={menuOpen} handleNavLinkClick={handleNavLinkClick} />
                    <ToggleMenuButton scroll={scroll} onClick={toggleMenu}>
                        {menuOpen ? <span style={{ fontSize: '1.5rem', fontWeight:'300' }}>✖</span> : '☰'} {/* Adjust size of "X" */}
                    </ToggleMenuButton>
                    <PortfolioLoginButton />
                </NavContainer>
            </Container>

            {/* Mobile Dropdown */}
            <MobileDropDownMenu
                menuOpen={menuOpen}
                servicesOpen={servicesOpen}
                toggleServicesDropdown={toggleServicesDropdown}
                closeMenu={closeMenu}
                handleNavLinkClick={handleNavLinkClick}
            />
        </HeaderWrapper>
    );
};

// Styled Components
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
    padding: 0 20px;
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
    color: ${({ scroll, isRootPage }) => (scroll || !isRootPage ? "black" : "white")};
    cursor: pointer;
    display: block;
    position: relative;
    order: 1;
    left: 30px;
    right: 30px;

    @media (min-width: 769px) {
        display: none;
    }

    @media (max-width: 430px) {
        font-size: 1.6rem;
    }
`;

export default Header;
