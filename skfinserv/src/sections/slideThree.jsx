import React, { useState } from "react";
import styled from "styled-components";



// Slide 3 - Third Slide Layout
const SlideThree = () => (
    <SlideContent>
        <h1>A goal without a plan is just a wish</h1>
        <p>Goal - Plan - Action</p>
    </SlideContent>
);

const SlideContent = styled.div`
    h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    p {
        font-size: 1.25rem;
        color: rgba(175, 202, 220, 0.9);
    }

    button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1rem;
        color: #fff;
        background-color: #000;
        border: none;
        cursor: pointer;
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

export default SlideThree;