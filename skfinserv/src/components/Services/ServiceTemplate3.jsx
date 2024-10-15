import React from 'react';
import styled from 'styled-components';

const InfoCard = ({ heading, text, highlightText, image, imageType = 'section' }) => {
    const ImageComponent = imageType === 'section' ? SectionImage : IconImage;

    return (
        <InfoSection>
            <SectionHeading>{heading}</SectionHeading>
            <ImageComponent src={image} alt={heading} />
            <SectionText>{text}</SectionText>
            {highlightText && <HighlightText>{highlightText}</HighlightText>}
        </InfoSection>
    );
};

// Styled Components for InfoCard
const InfoSection = styled.section`
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
    @media (max-width: 430px) {
        padding: 10px;
    }
`;

const SectionHeading = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 430px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

const SectionImage = styled.img`
    width: 80%;
    max-width: 600px;
    height: auto;
    display: block; /* Centering the image */
    margin: 0 auto; /* Centering the image */

    @media (max-width: 768px) {
        width: 70%;
    }
`;

const SectionText = styled.p`
    font-size: 18px;
    color: #555;
    max-width: 800px;
    margin: 0 auto 20px;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }

    @media (max-width: 430px) {
        font-size: 0.85rem;
    }
`;

const HighlightText = styled.h3`
    font-size: 22px;
    color: #3980a9;
    margin-top: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 430px) {
        font-size: 0.9rem;
    }
`;


const IconImage = styled.img`
    display: block; /* Centering the image */
    margin: 0 auto; /* Centering the image */
    align-items: center;
    justify-content: center;
    width: 100px;


    @media (max-width: 768px) {
        width: 80px;
    }

    @media (max-width: 430px) {
        width: 40px;
    }
`;

export default InfoCard;