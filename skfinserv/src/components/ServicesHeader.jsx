import React from 'react';
import styled from 'styled-components';

const ServicesHeader = ({ mainHeading, description }) => {
    return (
        <SectionWrapper>
            <ContentWrapper>
                <LeftContent>
                    <SmallHeading>SERVICES</SmallHeading>
                    <MainHeading>{mainHeading}</MainHeading> {/* Passed via props */}
                </LeftContent>
                <RightContent>
                    <Description>{description}</Description> {/* Passed via props */}
                </RightContent>
            </ContentWrapper>
        </SectionWrapper>
    );
};

// Styled Components
const SectionWrapper = styled.section`
    width: 100%;
    position: relative;
    height: 420px;
    background-color: rgb(20, 49, 86);
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;

    @media (max-width: 991px) {
        height: 500px; // Increased height for medium screens
        justify-content: center;
        align-items: center;
    }
    
    @media (max-width: 430px) {
        padding: 10px; // Reduce padding for smaller screens
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    padding: 50px 20px;

    @media (max-width: 991px) {
        padding: 0 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        padding: 30px 20px; // Adjust padding for smaller screens
    }
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 991px) {
        max-width: 100%; /* Full width on medium screens */
        text-align: center; /* Center text */
    }

    @media (max-width: 430px) {
        font-size: 0.9rem; // Slightly reduce font size
    }
`;

const RightContent = styled.div`
    display: flex;
    max-width: 40%;
    flex-direction: column;

    @media (max-width: 991px) {
        max-width: 100%; /* Full width on medium screens */
        text-align: center; /* Center text */
    }

    @media (max-width: 430px) {
        font-size: 0.9rem; // Slightly reduce font size
    }
`;

const SmallHeading = styled.h5`
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
`;

const MainHeading = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 15px;
    margin-top: 1rem;

    @media (max-width: 768px) {
        font-size: 3rem; // Adjust font size for medium screens
    }

    @media (max-width: 430px) {
        font-size: 2.5rem; // Further reduce font size for smaller screens
    }
`;

const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #fff;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 1rem; // Adjust font size for medium screens
    }

    @media (max-width: 430px) {
        font-size: 0.9rem; // Further reduce font size for smaller screens
    }
`;

export default ServicesHeader;