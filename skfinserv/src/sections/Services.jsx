import React from "react";
import styled from "styled-components";
import ServiceCard from "../components/Services/ServiceCard.jsx";
import piggyLogo from '../assets/Images/PiggyBankIcon.png';
import Emergency from '../assets/Images/Emergency.png';
import Retirement from '../assets/Images/Retirement.png';
import ChildEducation from '../assets/Images/GraduateIcon.png';
import AssetManagement from '../assets/Images/AssetManagement.png';
import RiskManagement from '../assets/Images/RiskManagement.png';

const Services = () => {
    const cardData = [
        {
            image: piggyLogo,
            title: 'Budgeting',
            description: 'It’s not your salary that makes you wealthy; It’s your spending habits.\n' +
                'Budget is not a plan to save; It’s a plan to spend!!\n',
            link: '/service/budgeting',
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
    padding: 40px 20px; 
    background-color: #f5f5f5; 
    margin: 40px 0; 
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 20px 0;
    }
    @media (max-width: 430px) {
        margin: 10px 0;
        padding: 30px 20px;
    }
`;

const StyledHeading = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: rgba(0, 0, 0);
    margin-bottom: 40px; 
    font-weight: bold;
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
    
    @media (max-width: 430px) {
        font-size: 1.4rem;
        margin-bottom: 20px;
    }
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 30px; 
    width: 100%;
    max-width: 1200px;
    padding: 0 20px; 
    
    @media (max-width: 630px) {
        grid-template-columns: 1fr;
        gap: 0;
    }

    @media (min-width: 630px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    @media (min-width: 1025px) {
        grid-template-columns: repeat(3, 1fr); 
    }
`;

export default Services;