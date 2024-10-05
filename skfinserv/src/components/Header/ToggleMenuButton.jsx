import styled from "styled-components";

const ToggleMenuButton = ({ scroll, onClick }) => {
    return (
        <StyledButton scroll={scroll} onClick={onClick}>
            &#9776; {/* Hamburger icon */}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    font-size: 1.8rem;
    background: none;
    border: none;
    color: ${({ scroll }) => (scroll ? "black" : "white")};
    cursor: pointer;
    display: block;
    position: relative;
    order: 1;

    @media (min-width: 769px) {
        display: none;
    }

    @media (max-width: 430px) {
        font-size: 1.6rem;
    }
`;

export default ToggleMenuButton;
