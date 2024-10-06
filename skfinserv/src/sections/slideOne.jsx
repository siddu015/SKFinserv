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
            <h1>Your Life - Your Needs - Your Money It's About You</h1>
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
    max-width: 1250px;
    width: 100%;
    height: 100%;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 100px 20px;
        gap: 0;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 50px 20px;
        gap: 0;
    }
`;

const LeftContent = styled.div`
    max-width: 50%;
    color: #fff;
    text-align: left;
    margin-right: 2rem;

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
        
        margin-right: 0;
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
        max-width: 100%;
        margin-right: 0;
        margin-top: 10px;
        
        h1 {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
            
        }
        p {
            font-size: 0.6rem;
            margin-bottom: 0.8rem;
        }
    }
`;

const RightContent = styled.div`
    margin-right: 3rem;
    max-width: 40%;
    
    @media (max-width: 768px) {
        max-width: 100%;
        //margin-top: -20px;
        margin-bottom: 40px;
        margin-right: 0;
    }
    @media (max-width: 430px) {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const ImageRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 30px;

    img {
        max-width: 100px;
        max-height: 100px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        justify-content: center;
        gap: 30px;
        img {
            width: 90px;
            height: 90px;
        }
    }

    @media (max-width: 430px) {
        justify-content: center;
        gap: 20px;
        img {
            width: 50px;
            height: 50px;
        }
    }
`;

export default SlideOne;
