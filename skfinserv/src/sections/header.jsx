import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioLogin from "../components/Header/portfolioLogin.jsx";
import Nav from "./Nav";
import MobileDropdownMenu from "./MobileDropdownMenu";
import Logo from "./Logo";
import ToggleMenuButton from "./ToggleMenuButton";

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    return (
        <HeaderWrapper scroll={scroll} isRootPage={isRootPage}>
            <Container>
                <Logo scroll={scroll} isRootPage={isRootPage} />
                <Nav
                    scroll={scroll}
                    isRootPage={isRootPage}
                    menuOpen={menuOpen}
                    servicesOpen={servicesOpen}
                    setServicesOpen={setServicesOpen}
                    handleNavLinkClick={handleNavLinkClick}
                />
                <ToggleMenuButton scroll={scroll} onClick={toggleMenu} />
                <PortfolioLoginButton>
                    <PortfolioLogin />
                </PortfolioLoginButton>
            </Container>
            {menuOpen && (
                <MobileDropdownMenu
                    servicesOpen={servicesOpen}
                    setServicesOpen={setServicesOpen}
                    handleNavLinkClick={handleNavLinkClick}
                />
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

export default Header;
