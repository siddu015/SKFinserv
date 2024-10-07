import React from "react";
import styled from "styled-components";
import ServiceButton from "./ServiceButton.jsx";

const ServiceCard = ({ image, title, description, link }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="initial">
                    <img src={image} className="card__image" alt={`${title} logo`} />
                    <h2 className="initial__title">{title}</h2>
                </div>
                <div className="card__content">
                    <p className="card__title">{title}</p>
                    <p className="card__description">{description}</p>
                    <div className="card__button-wrapper">
                        <a href={link}>
                            <ServiceButton />
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
        width: 100%;
        max-width: 350px;
        height: 100%;
        max-height: 400px;
        background-color: rgb(20, 49, 86);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-shadow: 0 0 0 5px #ffffff80;
        transition: all 0.4s ease-in-out;
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
        height: 120px;
        margin-bottom: 10px;
        transition: transform 0.4s ease-in-out;
    }

    .initial__title {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
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
        background-color: #3980a9;
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
        font-size: 24px;
        color: #ffffff;
        font-weight: 700;
        align-self: flex-start;
        text-align: left;
        line-height: 1.2; /* Adjusted for minimal gap */
    }

    .card__description {
        margin: 10px 0 0;
        font-size: 16px;
        line-height: 1.4;
        text-align: left;
        flex-grow: 1;
        color: #e0e0e0;
    }

    .card:hover .card__image {
        transform: scale(1.1);
    }

    .card__button-wrapper {
        align-self: flex-start;
        margin-top: auto;
        margin-left: -15px;
        margin-bottom: 20px;
    }

    @media (max-width: 630px) {
        .card {
            margin: 0.5rem auto;
        }
    }
    @media (max-width: 768px) {
        .card {
            max-width: 280px;
            height: 180px;
        }
        
        .card__image {
            width: 80px;
            height: 80px; /* Fixed height for consistency */
        }

        .initial__title,
        .card__title {
            font-size: 1.2rem; /* Reduced size for smaller screens */
        }
        
        .card__description {
            font-size: 0.9rem;
            margin-top: 4px;
        }

        .card__button-wrapper {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 430px) {
        .card {
            max-width: 240px; /* Responsive width */
            max-height: 160px;
        }

        .card__image {
            width: 60px;
            height: 60px; /* Fixed height for consistency */
        }

        .initial__title,
        .card__title {
            font-size: 1rem; /* Reduced size for smaller screens */
        }

        .card__description {
            font-size: 0.8rem; /* Reduced size for smaller screens */
            margin-top: 4px;
        }

        .card__button-wrapper {
            margin-top: 5px;
            margin-left: -12px;
            margin-bottom: 10px; /* Adjust spacing */
        }
`;

export default ServiceCard;