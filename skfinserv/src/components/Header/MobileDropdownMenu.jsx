import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MobileDropdownMenu = ({ menuOpen, servicesOpen, toggleServicesDropdown, closeMenu, handleNavLinkClick }) => {
    const dropdownRef = useRef(null);

    // Effect to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen, closeMenu]);

    return (
        <DropdownMenuWrapper ref={dropdownRef} menuOpen={menuOpen} servicesOpen={servicesOpen}>
            <ul>
                <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                <li className="dropdown-item">
                    <a onClick={toggleServicesDropdown} style={{ display: 'flex', alignItems: 'center', marginTop: '-5px'}}>
                        Services
                        <span style={{ marginLeft: '5px', marginTop: "0" }}>
                            {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </a>
                    <Dropdown className={`dropdown ${servicesOpen ? 'open' : ''}`} servicesOpen={servicesOpen}>
                        <li><a href="/service/budgeting">Budgeting</a></li>
                        <li><a href="/service/emergency">Emergency Planning</a></li>
                        <li><a href="/service/retirement">Retirement Solutions</a></li>
                        <li><a href="/service/childEducation">Child Education Planning</a></li>
                        <li><a href="/service/wealth">Wealth Creation & Management</a></li>
                        <li><a href="/service/riskManagement">Risk Management</a></li>
                    </Dropdown>
                </li>
                <li className="about-us"><a href="/aboutUs" onClick={handleNavLinkClick}>About Us</a></li>
                <li><a href="/contactUs" onClick={handleNavLinkClick}>Contact Us</a></li>
            </ul>
        </DropdownMenuWrapper>
    );
};

// Styled components
const DropdownMenuWrapper = styled.div`
    position: absolute;
    width: 100%;
    right: 1px;
    top: auto;
    margin-top: 15px;
    border-radius: 0;
    padding: 20px 40px;
    z-index: 999;
    backdrop-filter: blur(20px); /* Blurry background */
    background-color: rgba(250, 249, 249, 0.5); /* Slightly transparent white */
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3); /* Softer shadow */
    color: black;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 1s ease, opacity 0.8s ease;

    ${({ menuOpen }) => menuOpen && `
        max-height: 500px; 
        opacity: 1;
    `}

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
            a {
                color: black;
                text-decoration: none;
                font-size: 1.1rem;
                transition: color 0.2s ease, opacity 0.3s ease;
            }
        }

        &:hover li a {
            opacity: 0.6; /* Dim all links */
        }

        li a:hover {
            opacity: 1 !important; /* Keep hovered link at full opacity */
        }

        .about-us {
            margin-top: ${({ servicesOpen }) => (servicesOpen ? '1rem' : '0')}; /* Adjust the gap when servicesOpen */
        }
    }
`;

const Dropdown = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    margin-top: ${({ servicesOpen }) => (servicesOpen ? '1rem' : '0')}; /* Adjust the gap when servicesOpen */
    
    ${({ servicesOpen }) => servicesOpen && `
        max-height: 400px; /* Adjust depending on content */
        opacity: 1;
    `}

    li a {
        transition: color 0.2s ease;
    }
`;

export default MobileDropdownMenu;