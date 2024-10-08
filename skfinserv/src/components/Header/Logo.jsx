import React from 'react';
import styled from 'styled-components';

const LogoComponent = ({ scroll, isRootPage }) => {
    return <Logo scroll={scroll} isRootPage={isRootPage}>SK Finserv</Logo>;
};

const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ scroll, isRootPage }) => (scroll || !isRootPage ? "black" : "white")};
    transition: color 0.3s ease, font-size 0.3s ease;
    margin-right: 3rem;
    margin-top: 30px;

    @media (max-width: 1024px) {
        font-size: 1.4rem;
        margin-right: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-right: 1.5rem;
    }

    @media (max-width: 430px) {
        font-size: 1.1rem;
        margin-right: 0.5rem;
    }
`;

export default LogoComponent;