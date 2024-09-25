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
        padding: 10px 20px;
        font-size: 1.25rem; /* Match font size with header links */
        font-weight: bold;
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
`;

export default Button;