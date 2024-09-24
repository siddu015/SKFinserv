import React from "react";
import styled from "styled-components";
import ServiceCard from "../components/ServiceCard.jsx";
import piggyLogo from '../assets/Images/PiggyBankIcon.png';
import Emergency from '../assets/Images/Emergency.png';
import Retirement from '../assets/Images/Retirement.png';
import ChildEducation from '../assets/Images/GraduateIcon.png';
import AssetManagement from '../assets/Images/AssetManagement.png';
import RiskManagement from '../assets/Images/RiskManagement.png';

const Services = () => {
    // Data for cards
    const cardData = [
        {
            image: piggyLogo,
            title: 'Budgeting',
            description: 'It’s not your salary that makes you wealthy; It’s your spending habits.\n' +
                'Budget is not a plan to save; It’s a plan to spend!!\n',
            link: '/skfinserv/budgeting',
        },
        {
            image: Emergency,
            title: 'Emergency Planning',
            description: 'Emergencies don’t knock the doors. Expect the unexpected and Be prepared\n',
            link: '/emergency-planning',
        },
        {
            image: Retirement,
            title: 'Retirement Solutions',
            description: 'The good part is we are living longer. The sad part is we will have to pay for it\n',
            link: '/retirement-solutions',
        },
        {
            image: ChildEducation,
            title: 'Child Education Planning',
            description: 'Choices are immense. Don’t let their dreams be dreams; it’s time to make their dreams a reality\n',
            link: '/child-education-planning',
        },
        {
            image: AssetManagement,
            title: 'Wealth Creation & Management',
            description: 'Wealth creation is a process of building a stable source of income to achieve future goals with financial security\n',
            link: '/wealth-creation-management',
        },
        {
            image: RiskManagement,
            title: 'Risk Management',
            description: 'Insurance is the glue that holds the plan together. Make sure you have a cover when you need it\n',
            link: '/risk-management',
        },
    ];

    return (
        <StyledSection>
            <StyledHeading>We help you with…</StyledHeading>
            <StyledGrid>
                {cardData.map((card, index) => (
                    <ServiceCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </StyledGrid>
        </StyledSection>
    );
};

// Styled components
const StyledSection = styled.section`
    width: 100%;
    padding: 40px 20px; // Top and bottom padding with a bit of left-right space for alignment
    background-color: #f5f5f5; // Light background color to differentiate section
    margin: 40px 0; // Space between sections
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledHeading = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: rgba(0, 0, 0);
    margin-bottom: 40px; // Increased margin to provide more spacing between heading and content
    font-weight: bold;
    letter-spacing: 0.05em; // Slight letter spacing for improved readability
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Cards will automatically fit based on screen size
    gap: 30px; // Larger gap for breathing space between cards
    width: 100%;
    max-width: 1200px;
    padding: 0 20px; // Padding on left and right for better spacing on wider screens

    @media (max-width: 768px) {
        grid-template-columns: 1fr; // Stack cards on small screens
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); // Two columns on medium screens
    }

    @media (min-width: 1025px) {
        grid-template-columns: repeat(3, 1fr); // Three columns on large screens
    }
`;

export default Services;