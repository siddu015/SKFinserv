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
        <>
            {menuOpen && (
                <DropdownMenuWrapper ref={dropdownRef}>
                    <ul>
                        <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                        <li className="dropdown-item">
                            <a href="#" onClick={toggleServicesDropdown} style={{ display: 'flex', alignItems: 'center', margin: '-5px 0' }}>
                                Services
                                <span style={{ marginLeft: '5px', marginTop: "6px" }}>
                                    {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </a>
                            {servicesOpen && (
                                <ul className="dropdown" style={{ marginTop: '10px' }}>
                                    <li><a href="/services/budgeting">Budgeting</a></li>
                                    <li><a href="/services/emergency-planning">Emergency Planning</a></li>
                                    <li><a href="/services/retirement-solutions">Retirement Solutions</a></li>
                                    <li><a href="/services/child-education-planning">Child Education Planning</a></li>
                                    <li><a href="/services/wealth-creation">Wealth Creation & Management</a></li>
                                    <li><a href="/services/risk-management">Risk Management</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="/aboutUs" onClick={handleNavLinkClick}>About Us</a></li>
                        <li><a href="/contactUs" onClick={handleNavLinkClick}>Contact Us</a></li>
                    </ul>
                </DropdownMenuWrapper>
            )}
        </>
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
    padding: 1.5rem;
    z-index: 999;
    backdrop-filter: blur(20px); /* Blurry background */
    background-color: rgba(250, 249, 249, 0.5); /* Slightly transparent white */
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3); /* Softer shadow */
    color: black;

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
                transition: color 0.2s ease;

                &:hover {
                    text-decoration: underline;
                    color: #ffffff; /* Hover color for links */
                }
            }
        }
    }

    .dropdown {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 20px;

        li a {
            font-size: 0.95rem;
            transition: color 0.2s ease;

            &:hover {
                color: #ffffff; /* Hover color for dropdown links */
            }
        }
    }

    @media (max-width: 430px) {
        width: 100%;
        right: 1px;
        top: auto;
        margin-top: 15px;
        border-radius: 0;
    }
`;

export default MobileDropdownMenu;
