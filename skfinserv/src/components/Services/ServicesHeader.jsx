import React from 'react';
import styled from 'styled-components';

const ServicesHeader = ({ mainHeading, description }) => {
    return (
        <SectionWrapper>
            <Service>
                <Container>
                    <ContentWrapper>
                        <LeftContent>
                            <SmallHeading>SERVICES</SmallHeading>
                            <MainHeading>{mainHeading}</MainHeading> {/* Passed via props */}
                        </LeftContent>
                        <RightContent>
                            <Description>{description}</Description> {/* Passed via props */}
                        </RightContent>
                    </ContentWrapper>
                </Container>
            </Service>
        </SectionWrapper>
    );
};

// Styled Components
const SectionWrapper = styled.section`
    width: 100%;
    height: 400px;
    background-color: #0b1727;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 1024px) {
        height: 450px;
        justify-content: flex-start;
        align-items: flex-end;
    }

    @media (max-width: 768px) {
        height: 400px;
    }
    
    @media (max-width: 430px) {
        height: 350px;
    }
`;

const Service = styled.section`
    padding: 20px;
`;

const Container = styled.section`
    max-width: 1200px;
    padding: 20px;

    @media (max-width: 430px) {
        padding: 0 10px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightContent = styled.div`
    display: flex;
    max-width: 38%;
    
    flex-direction: column;

    @media (max-width: 1024px) {
        max-width: 100%; 
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

    @media (max-width: 768px) {
        font-size: 0.7rem; // Adjust font size for medium screens
    }

    @media (max-width: 430px) {
        font-size: 0.6rem; // Further reduce font size for smaller screens
    }
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
        font-size: 2rem; // Further reduce font size for smaller screens
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