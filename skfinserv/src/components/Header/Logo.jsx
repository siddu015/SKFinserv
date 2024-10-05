import styled from "styled-components";

const Logo = ({ scroll, isRootPage }) => {
    return (
        <StyledLogo scroll={scroll} isRootPage={isRootPage}>
            SK Finserv
        </StyledLogo>
    );
};

const StyledLogo = styled.h1`
    font-size: ${({ scroll }) => (scroll ? "1.5rem" : "1.7rem")};
    font-weight: bold;
    color: ${({ scroll, isRootPage }) => (scroll || !isRootPage ? "black" : "white")};
    transition: color 0.3s ease, font-size 0.3s ease;
    margin-right: 3rem;

    @media (max-width: 1024px) {
        font-size: ${({ scroll }) => (scroll ? "1.3rem" : "1.5rem")};
        margin-right: 2rem;
    }

    @media (max-width: 768px) {
        font-size: ${({ scroll }) => (scroll ? "1.2rem" : "1.5rem")};
        margin-right: 1.5rem;
    }

    @media (max-width: 430px) {
        font-size: 1.1rem;
    }
`;

export default Logo;
