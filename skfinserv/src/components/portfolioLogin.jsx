import React from "react";
import styled from "styled-components";

const Button = () => {
    return (
        <StyledWrapper>
            <button className="comic-button">Portfolio Login</button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .comic-button {
        display: inline-block;
        padding: 10px 20px; /* Default padding */
        font-size: 1.1rem; /* Default font size */
        font-weight: bolder;
        font-family: 'Castoro', serif; /* Add this line for font family */
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color: #ff5252;
        border: 2px solid #000;
        border-radius: 10px;
        box-shadow: 5px 5px 0px #000;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: #ff5252;
            border: 2px solid #ff5252;
            box-shadow: 5px 5px 0px #ff5252;
        }

        &:active {
            background-color: #ffffff;
            box-shadow: none;
            transform: translateY(4px);
        }
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .comic-button {
            padding: 8px 16px; /* Smaller padding for mobile */
            font-size: 1rem; /* Smaller font size for mobile */
        }
    }

    @media (max-width: 480px) {
        .comic-button {
            padding: 6px 12px; /* Even smaller padding for smaller screens */
            font-size: 0.9rem; /* Smaller font size for small screens */
        }
    }
`;

export default Button;