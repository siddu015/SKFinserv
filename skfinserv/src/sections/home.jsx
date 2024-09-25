import React, { useState } from "react";
import styled from "styled-components";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, heading: "Welcome to Our Service", content: "Explore the amazing features we offer." },
        { id: 2, heading: "Innovative Solutions", content: "Discover how we can help you succeed." },
        { id: 3, heading: "Join Us Today", content: "Be part of our growing community." },
    ];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <HomeWrapper>
            <SlidesWrapper currentSlide={currentSlide}>
                {slides.map((slide) => (
                    <Slide key={slide.id}>
                        <SlideContent>
                            <h1>{slide.heading}</h1>
                            <p>{slide.content}</p>
                        </SlideContent>
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
    height: 800px;  /* Fixed height */
    position: relative; /* For positioning dots */
    overflow: hidden; /* Hide overflow */
    width: 100%;
`;

const SlidesWrapper = styled.div`
    display: flex;
    height: 100%; /* Full height of HomeWrapper */
    transform: translateX(-${(props) => props.currentSlide * 100}vw); /* Slide effect */
    transition: transform 0.5s ease; /* Smooth transition */
`;

const Slide = styled.div`
    flex: 0 0 100%; /* Each slide takes 100% width */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px; /* Fixed height */
    text-align: center;
    padding: 20px; /* Padding for content */
`;

const SlideContent = styled.div`
    h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: #fff; /* Heading color */
    }

    p {
        font-size: 1.25rem;
        color: rgba(175, 202, 220, 0.9); /* Slightly faded paragraph color */
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
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