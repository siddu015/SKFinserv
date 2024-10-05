import React from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

const Nav = ({ scroll, isRootPage, menuOpen, servicesOpen, setServicesOpen, handleNavLinkClick }) => {
    const toggleServicesDropdown = () => {
        setServicesOpen(!servicesOpen);
    };

    return (
        <NavContainer>
            <NavList scroll={scroll} isRootPage={isRootPage}>
                <ul>
                    <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                    <li className="dropdown-item">
                        <a href="#" onClick={toggleServicesDropdown} style={{ display: 'flex', alignItems: 'center' }}>
                            Services
                            <span style={{ marginLeft: '5px' }}>
                                {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </a>
                        {servicesOpen && (
                            <DropdownMenu>
                                <li><a href="/services/budgeting" onClick={handleNavLinkClick}>Budgeting</a></li>
                                <li><a href="/services/emergency-planning" onClick={handleNavLinkClick}>Emergency Planning</a></li>
                                <li><a href="/services/retirement-solutions" onClick={handleNavLinkClick}>Retirement Solutions</a></li>
                                <li><a href="/services/child-education-planning" onClick={handleNavLinkClick}>Child Education Planning</a></li>
                                <li><a href="/services/wealth-creation" onClick={handleNavLinkClick}>Wealth Creation & Management</a></li>
                                <li><a href="/services/risk-management" onClick={handleNavLinkClick}>Risk Management</a></li>
                            </DropdownMenu>
                        )}
                    </li>
                    <li><a href="/aboutUs" onClick={handleNavLinkClick}>About Us</a></li>
                    <li><a href="/contactUs" onClick={handleNavLinkClick}>Contact Us</a></li>
                </ul>
            </NavList>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const NavList = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        align-items: center;

        li {
            position: relative;

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
            display: none; /* Hide on smaller screens; use mobile dropdown */
        }
    }

    @media (max-width: 430px) {
        ul li a {
            font-size: 0.9rem;
        }
    }
`;

const DropdownMenu = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    z-index: 10;
    width: 260px;
    margin-top: 5px;

    li {
        margin: -5px 0;

        a {
            color: black;
            text-decoration: none;
            font-size: 0.9rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export default Nav;
