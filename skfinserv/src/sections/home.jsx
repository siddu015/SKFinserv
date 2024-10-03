import React, { useState } from "react";
import styled from "styled-components";
import SlideOne from "./slide1.jsx"
import SlideTwo from "./slide2.jsx"
import SlideThree from "./slide3.jsx"

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, component: <SlideOne /> },
        { id: 2, component: <SlideTwo /> },
        { id: 3, component: <SlideThree /> },
    ];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <HomeWrapper>
            <SlidesWrapper currentSlide={currentSlide}>
                {slides.map((slide) => (
                    <Slide key={slide.id}>
                        {slide.component}
                    </Slide>
                ))}
            </SlidesWrapper>
            <DotsContainer>
                {slides.map((_, index) => (
                    <Dot
                        key={index}
                        isActive={currentSlide === index}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </DotsContainer>
        </HomeWrapper>
    );
};






// Styled Components
const HomeWrapper = styled.section`
    background: linear-gradient(to bottom right, rgba(10, 28, 64, 0.98) 12%, rgba(38, 116, 160) 63%, rgba(175, 202, 220, 0.99) 100%);
    color: rgba(175, 202, 220, 0.99);
    height: 800px;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

const SlidesWrapper = styled.div`
    display: flex;
    height: 100%;
    transform: translateX(-${(props) => props.currentSlide * 100}vw);
    transition: transform 0.5s ease;
`;

const Slide = styled.div`
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    text-align: center;
    padding: 50px;
`;

const DotsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ isActive }) => (isActive ? "#fff" : "rgba(255, 255, 255, 0.5)")};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
`;

export default Home;