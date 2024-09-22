import React from "react";
import styled from "styled-components";
import SectionButton from "./sectionButton.jsx";
import piggyLogo from './assets/PiggyBank.png'


const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="initial">
                    <img src={piggyLogo} className="card__image" alt="Piggy-Bank logo"/>
                    <h2 className="initial__title">Budgeting</h2>
                </div>
                <div className="card__content">
                    <p className="card__title">Budgeting</p>
                    <p className="card__description">
                        It’s not your salary that makes you wealthy; It’s your spending habits.
                        Budget is not a plan to save
                        It’s a plan to spend!!
                    </p>
                    <div className="card__button-wrapper">
                        <a href="/">
                            <SectionButton/>
                        </a>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        position: relative;
        width: 250px;
        height: 200px;
        background-color: rgba(10, 28, 64, 0.98);
        border-radius: 20px;
        display: flex;
        flex-direction: column; /* Allows stacking of image and content */
        align-items: center;
        justify-content: center; /* Aligns items at the top */
        overflow: hidden;
        box-shadow: 0 0 0 5px #ffffff80;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .initial {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: opacity 0.6s ease-in-out;
    }


    .card__image {
        width: 120px;
        height: auto;
        margin-bottom: 10px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .initial__title {
        //color: #ffffff;
        font-size: 28px;
        font-weight: bold;
        margin: 0;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .card__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #3980A9;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 0;
        font-size: 28px;
        color: #ffffff;
        font-weight: 700;
        align-self: flex-start;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 18px;
        line-height: 1.4;
        text-align: left;
        flex-grow: 1;
    }

    .card:hover .card__image {
        scale: 1.1; /* Scales up the image on hover */
    }

    .card__button-wrapper {
        align-self: flex-start;
        margin-top: auto; 
        margin-left: -15px;
        margin-bottom: 20px;
    }
`;

export default Card;