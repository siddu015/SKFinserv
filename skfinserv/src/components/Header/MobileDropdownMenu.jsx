import React from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MobileDropdownMenu = ({ servicesOpen, setServicesOpen, handleNavLinkClick }) => {
    const toggleServicesDropdown = () => {
        setServicesOpen(!servicesOpen);
    };

    return (
        <DropdownMenu>
            <ul>
                <li><a href="/skfinserv/public" onClick={handleNavLinkClick}>Home</a></li>
                <li className="dropdown-item">
                    <a href="#" onClick={toggleServicesDropdown}
                       style={{ display: 'flex', alignItems: 'center' }}>
                        Services
                        <span style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
                            {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </a>
                    {servicesOpen && (
                        <ul className="dropdown">
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
        </DropdownMenu>
    );
};

const DropdownMenu = styled.div`
    position: absolute;
    top: 100px;
    right: 10px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding: 1.5rem;
    z-index: 999;
    width: 300px;

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

    .dropdown {
        display: flex;
        align-items: flex-start;
        top: 150%;
        left: 0;
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

export default MobileDropdownMenu;
