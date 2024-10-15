import React from 'react';
import styled from 'styled-components';

const ServiceTemplate2 = ({ heading, paragraphs, quote, imageSrc, imagePosition = 'right', altText }) => {
    return (
        <Container>
            <Heading>{heading}</Heading>

            <Content imagePosition={imagePosition}>
                <TextContainer imagePosition={imagePosition}>
                    {paragraphs.map((paragraph, index) => (
                        <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    <Quote>{quote}</Quote>
                </TextContainer>

                <ImageContainer imagePosition={imagePosition}>
                    <Image src={imageSrc} alt={altText} />
                </ImageContainer>
            </Content>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto 40px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
    @media (max-width: 430px) {
        padding: 10px;
    }
`;

const Heading = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin:0 auto 30px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    @media (max-width: 430px) {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: ${({ imagePosition }) => (imagePosition === 'left' ? 'row' : 'row-reverse')}; // Swap based on imagePosition
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;  
 
    padding-right: ${({ imagePosition }) => (imagePosition === 'left' ? '40px' : '0')}; // Add padding based on image position
    padding-left: ${({ imagePosition }) => (imagePosition === 'right' ? '40px' : '0')};

    @media (max-width: 768px) {
        padding: 0;
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
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 430px) {
        font-size: 0.9rem;
    }
`;

const ImageContainer = styled.div`
    max-width: 300px;
    flex: 0 0 40%;
    display: flex;
    justify-content: ${(props) => (props.imagePosition === 'left' ? 'center' : 'flex-start')};
    
    @media (max-width: 768px) {
        max-width: 100%;
        flex: 0 0 60%; // Wider image container on medium screens
        justify-content: center;
    }

    @media (max-width: 430px) {
        flex: 0 0 100%; // Full width for images on smaller screens
    }
`;

const Image = styled.img`
    max-width: 300px;
    height: auto;

    @media (max-width: 768px) {
        max-width: 40%;
    }
    
`;

export default ServiceTemplate2;