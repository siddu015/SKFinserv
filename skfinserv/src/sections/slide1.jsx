import React from "react";
import styled from "styled-components";
import Graduation from "../assets/icons/GraduationCapIcon.svg";
import Marriage from "../assets/icons/marriage.png";
import PiggyBankRupee from "../assets/icons/PiggyBankRupee.png";
import OldCouple from "../assets/icons/OldCouple.png";
import House from "../assets/icons/House.png";
import Travelling from "../assets/icons/Travelling.png";
import HomeButton from "../components/homeButton.jsx";

const SlideOne = () => (
    <SlideContent>
        <LeftContent>
            <h1>Your Life - Your Needs - Your Money</h1>
            <p>We at SK Wealth walk with you through the journey of life to help you fulfill your dreams.
                Creating a financial plan helps you see the big picture and enables you to set your priorities right.
                To us it's not just about planning your finances, it's about planning your lives.</p>
            <HomeButton />
        </LeftContent>
        <RightContent>
            <ImageRow>
                <img src={Graduation} alt="Graduation Cap Icon" />
                <img src={Marriage} alt="Marriage Icon" />
                <img src={PiggyBankRupee} alt="Piggy Bank with Rupee Icon" />
            </ImageRow>
            <ImageRow>
                <img src={OldCouple} alt="Old Couple Icon" />
                <img src={House} alt="House Icon" />
                <img src={Travelling} alt="Travelling Icon" />
            </ImageRow>
        </RightContent>
    </SlideContent>
);

// Styled Components

const SlideContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    //padding: 0 40px;
    gap: 40px; 
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 20px;
        margin-top: 80px;
    }
`;

const LeftContent = styled.div`
    max-width: 45%; /* Reduced max-width to bring closer to center */
    text-align: left;
    color: #fff;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        color: rgba(175, 202, 220, 0.9);
    }

    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
    }
`;

const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Align images to the center */
    max-width: 45%; /* Reduced max-width for better centering */

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const ImageRow = styled.div`
    display: flex;
    justify-content: space-around; /* Spreads out images more evenly */
    margin-bottom: 20px;
    gap: 40px; /* Increase gap between images for better spacing */

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        justify-content: center;
        gap: 20px; /* Slightly reduce gap for mobile view */
        img {
            width: 80px;
            height: 80px;
        }
    }
`;

export default SlideOne;