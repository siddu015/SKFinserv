import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Nav = ({ scroll, isRootPage, menuOpen, handleNavLinkClick, closeMenu }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for the dropdown

    const toggleServicesDropdown = () => {
        setServicesOpen(!servicesOpen);
    };

    // Effect to close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <NavContainer>
            <NavWrapper scroll={scroll} isRootPage={isRootPage} menuOpen={menuOpen}>
                <ul>
                    <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                    {/* Services Dropdown with Icon */}
                    <li className="dropdown-item" ref={dropdownRef}>
                        <a href="#" onClick={toggleServicesDropdown} style={{ display: 'flex', alignItems: 'center' }}>
                            Services
                            <span style={{ marginLeft: '5px', marginTop: "5px" }}>
                                {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </a>
                        {servicesOpen && (
                            <ul className="dropdown-service">
                                <li><a href="/services/budgeting" onClick={handleNavLinkClick}>Budgeting</a></li>
                                <li><a href="/services/emergency-planning" onClick={handleNavLinkClick}>Emergency Planning</a></li>
                                <li><a href="/services/retirement-solutions" onClick={handleNavLinkClick}>Retirement Solutions</a></li>
                                <li><a href="/services/child-education-planning" onClick={handleNavLinkClick}>Child Education Planning</a></li>
                                <li><a href="/services/wealth-creation" onClick={handleNavLinkClick}>Wealth Creation & Management</a></li>
                                <li><a href="/services/risk-management" onClick={handleNavLinkClick}>Risk Management</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/aboutUs" onClick={handleNavLinkClick}>About Us</a></li>
                    <li><a href="/contactUs" onClick={handleNavLinkClick}>Contact Us</a></li>
                </ul>
            </NavWrapper>
        </NavContainer>
    );
};


// Styled Components for Nav
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1rem;
`;

const NavWrapper = styled.nav`
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

            /* Services Dropdown */
            .dropdown-service {
                display: flex;
                position: absolute;
                align-items: flex-start;
                top: 150%;
                left: 0;
                backdrop-filter: blur(20px); /* Blurry background */
                background-color: rgba(250, 249, 249, 0.5); /* Slightly transparent white */
                box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
                //background-color: white;
                //box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
                padding: 20px;
                border-radius: 10px;
                z-index: 10;
                flex-direction: column;
                width: 260px;

                li {
                    margin: -5px 0;

                    a {
                        color: black;
                        text-decoration: none;
                        font-size: 0.9rem;

                        &:hover {
                            text-decoration: underline;
                            color: #ffffff;
                        }
                    }
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

export default Nav;