import React, { useState } from "react";
import styled from "styled-components";


// Slide 2 - Second Slide Layout
const SlideTwo = () => (
    <SlideContent>
        <h1>Goals are Dreams with Deadlines</h1>
        <p>The journey to your dreams would be well achieved if you plan for them beforehand.</p>
        <button>Let's Achieve</button>
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

export default SlideTwo;