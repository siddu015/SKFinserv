import React from "react";
import styled from "styled-components";
import FinancialPlanning from "../../assets/Images/finanicalPlanning.png";
import HomeButton from "../homeButton.jsx";

const SlideTwo = () => (
    <SlideContent>
        <LeftContent>
            <h1>Goals are Dreams with Deadlines</h1>
            <p>
                The journey to your dreams would be well achieved if you plan for them beforehand.
                Know what you want, when you want, and the rest will fall in place.
                <br />
                <b>Your Dreams. Your Goals. Your Journey. You Drive. We make sure you meet the deadline.</b>
            </p>
            <HomeButton />
        </LeftContent>
        <RightContent>
            <img src={FinancialPlanning} alt="Financial Planning" />
        </RightContent>
    </SlideContent>
);

// Styled Components
const SlideContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1250px;
    width: 100%;
    height: 100%;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 50px 20px;
        gap: 0;
    }
`;

const LeftContent = styled.div`
    max-width: 55%;
    color: #fff;
    text-align: left;

    h1 {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.3rem;
        margin-bottom: 1.8rem;
        color: rgba(175, 202, 220, 0.9);
        text-align: justify;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 40px;

        h1 {
            font-size: 2rem;
            margin-bottom: 1.2rem;
        }

        p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
        }
    }

    @media (max-width: 430px) {
        margin-top: 20px;

        h1 {
            font-size: 1rem;
            margin-bottom: 0.8rem;
        }

        p {
            font-size: 0.6rem;
            margin-bottom: 0.8rem;
        }
    }
`;

const RightContent = styled.div`
    img {
        width: 350px;
        height: 350px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        img {
            width: 250px;
            height: 250px;
        }
    }

    @media (max-width: 430px) {
        img {
            width: 150px;
            height: 150px;
        }
    }
`;

export default SlideTwo;