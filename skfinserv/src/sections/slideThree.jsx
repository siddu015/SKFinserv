import React from "react";
import styled from "styled-components";

// Slide 3 - Third Slide Layout
const SlideThree = () => (
    <SlideWrapper>
        <ContentWrapper>
            <Quote>
                “A <strong>goal</strong> without a <strong>plan</strong> is just a <strong>wish</strong>”
            </Quote>
            <DiagramContainer>
                <ResponsiveCircle className="circle1" />
                <ResponsiveCircle className="circle2" />
                <ResponsiveCircle className="circle3" />

                <CircleLabel className="goal">GOAL</CircleLabel>
                <CircleLabel className="plan">PLAN</CircleLabel>
                <CircleLabel className="action">ACTION</CircleLabel>

                <CenterIcon>🧠</CenterIcon>
            </DiagramContainer>
        </ContentWrapper>
    </SlideWrapper>
);

const SlideWrapper = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 50px 20px;
    }
    
    @media (max-width: 430px) {
        padding: 20px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Quote = styled.h1`
    font-size: 2.8rem;
    text-align: center;
    color: white;
    margin-bottom: 5rem;

    strong {
        font-weight: bold;
    }

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }

    @media (max-width: 430px) {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
`;

const DiagramContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;

    @media (max-width: 768px) {
        width: 250px;
        height: 250px;
    }

    @media (max-width: 430px) {
        width: 150px;
        height: 150px;
    }
`;

const ResponsiveCircle = styled.div`
    width: 200px;
    height: 200px;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    background: transparent;

    &.circle1 {
        top: 0;
        left: 0;
    }

    &.circle2 {
        top: 0;
        right: 0;
    }

    &.circle3 {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 768px) {
        border: 2px solid white;
        width: 160px;
        height: 160px;
    }

    @media (max-width: 430px) {
        border: 1px solid white;
        width: 100px;
        height: 100px;
    }
`;

const CircleLabel = styled.div`
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    text-align: center;

    &.goal {
        top: -20px;
        left: 10%;
        transform: translateX(-50%);
    }

    &.plan {
        top: -20px;
        right: -10px;
        transform: translateX(-50%);
    }

    &.action {
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        &.action {
            bottom: -30px;
        }
    }

    @media (max-width: 430px) {
        font-size: 0.6rem;
        &.goal {
            top: -15px;
            left: 10%;
        }

        &.plan {
            top: -15px;
            right: -10%;
        }

        &.action {
            bottom: -20px;
        }
    }
`;

const CenterIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    font-size: 2rem;

    @media (max-width: 768px) {
        top: 48%;
        font-size: 1.8rem;
    }

    @media (max-width: 430px) {
        font-size: 1.2rem;
    }
`;

export default SlideThree;