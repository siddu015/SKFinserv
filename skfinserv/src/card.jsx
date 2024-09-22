import React from "react";
import styled from "styled-components";
import SectionButton from "./sectionButton.jsx";

const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <img src="./assets/PiggyBank.png" alt="Piggy Bank" className="card__image" />
                <div className="card__content">
                    <p className="card__title">Card Title</p>
                    <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <SectionButton />
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        position: relative;
        width: 300px;
        height: 350px; /* Increased height to accommodate image */
        background-color: rgba(10, 28, 64, 0.98);
        border-radius: 10px;
        display: flex;
        flex-direction: column; /* Allows stacking of image and content */
        align-items: center;
        justify-content: flex-start; /* Aligns items at the top */
        overflow: hidden;
        perspective: 1000px;
        box-shadow: 0 0 0 5px #ffffff80;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card__image {
        width: 80px;
        height: auto;
        margin-top: 20px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }

    .card__content {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #3980A9;
        transform: rotateX(-90deg);
        transform-origin: bottom;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover .card__content {
        transform: rotateX(0deg);
    }

    .card__title {
        margin: 10px 0 0;
        font-size: 24px;
        color: #ffffff;
        font-weight: 700;
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 14px;
        color: #ffffff;
        line-height: 1.4;
    }

    .card:hover .card__image {
        scale: 1.1; /* Scales up the image on hover */
    }
`;

export default Card;