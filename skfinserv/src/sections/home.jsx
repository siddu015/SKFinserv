import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SlideOne from "../components/Home/slideOne.jsx";
import SlideTwo from "../components/Home/slideTwo.jsx";
import SlideThree from "../components/Home/slideThree.jsx";

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

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slides every 3 seconds

        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [slides.length]);

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
    width: 100%;
    overflow: hidden;

    @media (max-width: 768px) {
        height: 750px;
    }

    @media (max-width: 430px) {
        height: 500px;
    }
`;

const SlidesWrapper = styled.div`
    display: flex;
    height: 100%;
    transform: translateX(-${(props) => props.currentSlide * 100}%); // Shift horizontally between slides
    transition: transform 0.6s ease-in-out;
    width: 100%; // Enough space for both slides
`;

const Slide = styled.div`
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 0 40px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        height: auto;
        padding: 20px;
    }
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