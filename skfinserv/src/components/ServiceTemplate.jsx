import React from 'react';
import styled from 'styled-components';

const ServiceTemplate = ({ heading, paragraphs, quote, imageSrc, imagePosition = 'right', altText }) => {
    return (
        <Container>
            <Heading>{heading}</Heading>

            <Content>
                {/* Image on the left */}
                {imagePosition === 'left' && (
                    <ImageContainer imagePosition={imagePosition}>
                        <Image src={imageSrc} alt={altText} />
                    </ImageContainer>
                )}

                <TextContainer imagePosition={imagePosition}>
                    {paragraphs.map((paragraph, index) => (
                        <Paragraph key={index}>{paragraph}</Paragraph>
                    ))}
                    <Quote>{quote}</Quote>
                </TextContainer>

                {/* Image on the right */}
                {imagePosition === 'right' && (
                    <ImageContainer imagePosition={imagePosition}>
                        <Image src={imageSrc} alt={altText} />
                    </ImageContainer>
                )}
            </Content>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 20px; // Reduce padding for medium screens
    }

    @media (max-width: 430px) {
        padding: 10px; // Further reduce padding for smaller screens
    }
`;

const Heading = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.5rem; // Adjust font size for medium screens
    }

    @media (max-width: 430px) {
        font-size: 1.2rem; // Further adjust font size for smaller screens
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column; // Stack elements vertically on medium screens
        align-items: center; // Center align items
    }
`;

const TextContainer = styled.div`
    flex: 1;
    text-align: justify;

    @media (max-width: 768px) {
        text-align: center; // Center align text on medium screens
        margin-top: 10px; // Add top margin for spacing
    }
`;

const Paragraph = styled.p`
    margin-bottom: 15px;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 0.95rem; // Adjust font size for medium screens
    }

    @media (max-width: 430px) {
        font-size: 0.85rem; // Further adjust font size for smaller screens
    }
`;

const Quote = styled.blockquote`
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1rem; // Adjust font size for medium screens
    }

    @media (max-width: 430px) {
        font-size: 0.9rem; // Further adjust font size for smaller screens
    }
`;

const ImageContainer = styled.div`
    flex: 0 0 40%;
    display: flex;
    justify-content: ${(props) => (props.imagePosition === 'left' ? 'flex-start' : 'flex-end')}; /* Conditional alignment */

    @media (max-width: 768px) {
        flex: 0 0 80%; // Make image container wider on medium screens
        margin-bottom: 20px; // Add bottom margin for spacing
    }

    @media (max-width: 430px) {
        flex: 0 0 100%; // Full width for images on smaller screens
        justify-content: center; // Center the image
    }
`;

const Image = styled.img`
    max-width: 350px;
    height: auto;

    @media (max-width: 768px) {
        max-width: 80%; // Reduce max-width for medium screens
    }

    @media (max-width: 430px) {
        max-width: 60%; // Full width for images on smaller screens
    }
`;

export default ServiceTemplate;