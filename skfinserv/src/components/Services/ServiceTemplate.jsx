import React from 'react';
import styled from 'styled-components';

const ServiceTemplate = ({ heading, paragraphs, quote, imageSrc, imagePosition = 'right', altText }) => {
    return (
        <Container>
            <Heading>{heading}</Heading>

            <Content>

                <TextContainer imagePosition={imagePosition}>
                    {paragraphs.map((paragraph, index) => (
                        <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    <Quote>{quote}</Quote>
                </TextContainer>

            </Content>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    max-width: 1200px;
    text-align: center;
    padding: 20px;
    margin: 0 auto 20px;

    @media (max-width: 768px) {
    }
    
    @media (max-width: 430px) {
        padding: 10px;
    }
`;

const Heading = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 1.5rem; 
    }

    @media (max-width: 430px) {
        font-size: 1.2rem; 
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 0;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
        padding: 10px 0;
    }

    @media (max-width: 430px) {
        padding: 0;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    text-align: justify;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

const Paragraph = styled.p`
    margin-bottom: 20px;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }

    @media (max-width: 430px) {
        font-size: 0.85rem; 
    }
`;

const Quote = styled.blockquote`
    font-size: 20px;
    color: #3980a9;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.1rem; 
    }

    @media (max-width: 430px) {
        font-size: 1rem;
    }
`;

export default ServiceTemplate;