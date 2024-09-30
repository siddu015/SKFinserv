import React from "react";
import styled from "styled-components";
import SocialLinks from "../components/socialLinks.jsx";
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import MailIcon from "../assets/icons/MailIcon.png";
import LocationIcon from "../assets/icons/LocationIcon.png";
import AMFI from "../assets/images/AMFI.jpg";
import MutualFund from "../assets/images/MutualFund.png";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop>
                <Container>
                    <FooterSection>
                        <About>
                            <h3>SK Finserv</h3>
                            <p>
                                Welcome to SK Finserv, your trusted financial companion in India. We understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind. At SK Finserv, we believe everyone deserves a secure and prosperous future.
                                <br /><br />
                                SK Finserv has been in the field of personal finance and wealth management for over a decade. We make sure every plan is tailored to each client’s current financial situation, future goals, and risk appetite.
                            </p>
                            <SocialLinks>
                                <SocialLinks />
                            </SocialLinks>
                        </About>
                        <GetInTouch>
                            <h3>Get in Touch</h3>
                            <div>
                                <img src={PhoneIcon} alt="" />
                                <p>+91 9397682824</p>
                            </div>
                            <div>
                                <img src={MailIcon} alt="" />
                                <p>mail.skfinserv@gmail.com</p>
                            </div>
                            <div>
                                <img src={LocationIcon} alt="" />
                                <p> Room No - 6, First Floor, <br />
                                    Opp to Prasad Reddy Hospital, <br />
                                    Sreeramula Peta, Proddatur, <br />
                                    Andhra Pradesh 516360
                                </p>
                            </div>
                        </GetInTouch>
                    </FooterSection>
                </Container>
            </FooterTop>

            {/* Separator Line */}
            <Separator />

            <Disclaimer>
                <DContainer>
                    <DisclaimerSection>
                        <DisclaimerText>
                            <p className="bold-text">SK Finserv is an AMFI Registered Mutual Fund Distributor.</p>
                            <p>Disclaimer - Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved.</p>
                            <p>SK Finserv makes no warranties or representations, express or implied, on products offered through the platform of SK Finserv. It accepts no liability for any damages or losses, however, caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable. Investments in Securities markets are subject to market risks, read all the related documents carefully before investing.</p>
                        </DisclaimerText>
                        <ImagesWrapper>
                            <img src={AMFI} alt="AMFI Registered" />
                            <p>AMFI Registered <br /> ARN - 180560</p>
                            <img src={MutualFund} alt="Mutual Fund" className="fit-image" />
                        </ImagesWrapper>
                    </DisclaimerSection>
                </DContainer>
            </Disclaimer>

            <FooterBottom>
                <Container>
                    <Left>&copy; 2023 SK Finserv | All rights reserved</Left>
                    <Middle>Privacy Policy</Middle>
                    <Right>Designed & Developed by Srinath Reddy</Right>
                </Container>
            </FooterBottom>
        </FooterWrapper>
    );
};

// Styled Components
const FooterWrapper = styled.footer`
    width: 100%;
    min-width: 100%;
    background: linear-gradient(to bottom, rgba(94, 152, 185, 0.3) 8%, rgba(94, 152, 185, 0.6) 66%);
`;

const FooterTop = styled.div`
    padding: 50px 20px;
    margin-bottom: 2rem;
`;

const Separator = styled.hr`
    width: 85%;
    margin: 0 auto;
    border: 1px solid black;  /* Adjust the color and thickness as needed */
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: justify;
    min-width: 250px; 
    width: 100%;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
    }

    p {
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const About = styled.div`
    flex: 1;
    margin-right: 100px;

    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

const GetInTouch = styled.div`
    flex: 1;
    
    div {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;

        img {
            width: 24px;
            height: auto;
            margin-right: 1rem;
        }
    }

    @media (max-width: 768px) {
        margin-top: 80px;
    }
`;

const Disclaimer = styled.div`
    padding: 50px 20px;
    width: 100%;
`;

const DContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const DisclaimerSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: justify;
    min-width: 250px;
    width: 100%;

    p {
        line-height: 1.6;
    }

`;

const DisclaimerText = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    p {
        margin: 10px 0;
        &.bold-text {
            font-weight: bold;
        }
    }
`;

const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;

    img {
        margin: 0 10px;
        width: 100px;
        height: auto;
    }

    .fit-image {
        width: auto;
        max-height: 100px;
    }

    p {
        text-align: center;
        font-weight: bold;
        margin: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const FooterBottom = styled.div`
    background-color: #0F2144;
    width: 100%;
    padding: 20px 0;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    text-align: center;

    @media (max-width: 768px) {
        padding: 10px 20px;
        flex-direction: column;
        align-items: center;
    }
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Left = styled.div`
    flex: 1;
    text-align: left;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 1rem;
    }
`;

const Middle = styled.div`
    flex: 1;
    text-align: center;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Right = styled.div`
    flex: 1;
    text-align: right;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 1rem;
    }
`;

export default Footer;