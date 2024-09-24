import React from "react";
import styled from "styled-components";
import SocialLinks from "../components/socialLinks.jsx";
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import MailIcon from "../assets/icons/MailIcon.png";
import LocationIcon from "../assets/icons/LocationIcon.png";

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
                            <div className="">
                                <img src={MailIcon} alt="" />
                                <p>mail.skfinserv@gmail.com</p>
                            </div>
                            <div className="">
                                <img src={LocationIcon} alt="" />
                                <p> Room No - 6, First Floor, <br/>
                                    Opp to Prasad Reddy Hospital, <br/>
                                    Sreeramula Peta,  Proddatur, <br/>
                                    Andhra Pradesh 516360
                                </p>
                            </div>
                        </GetInTouch>
                    </FooterSection>
                </Container>
            </FooterTop>

            <Disclaimer>
                    <DisclaimerText>
                        <p className="bold-text">SK Finserv is an AMFI Registered Mutual Fund Distributor.</p>
                        <p>Disclaimer: Investments in Mutual Funds are subject to Market Risks. Read all scheme-related documents carefully before investing.</p>
                        <p>SK Finserv makes no warranties or representations on products offered. It accepts no liability for any damages or losses in connection with the use of its product or related services.</p>
                    </DisclaimerText>
                    <Images>
                        <img src="path/to/image1.png" alt="Image 1" />
                        <p> AMFI Registered <br/>
                            ARN - 180560
                        </p>
                        <img src="path/to/image2.png" alt="Image 2" />
                    </Images>
            </Disclaimer>

            <FooterBottom>
                <Container>
                    <Left>&copy; 2023 The SK Fineserv | All rights reserved</Left>
                    <Middle>Privacy Policy</Middle>
                    <Right>Designed & Developed by Srinath Reddy</Right>
                </Container>
            </FooterBottom>
        </FooterWrapper>
    );
};

// Styled Components
const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to bottom, #5E98B9 8%, #5E98B9 66%);
    color: white;
    box-sizing: border-box; /* Make sure padding is included in the total width */
`;

const FooterTop = styled.div`
    padding: 50px 0 80px; /* Increase bottom padding for extra gap */
    width: 100%;
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const About = styled.div`
    flex: 1;
    margin-right: 100px;
    text-align: justify;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
    }

    p {
        line-height: 1.6;
    }
`;

const GetInTouch = styled.div`
    flex: 1;
    text-align: justify;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
    }

    div {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;

        img {
            width: 24px;
            height: auto;
            margin-right: 10px;
            f;
        }

        p {
            line-height: 1.6;
        }
    }
`;

const Disclaimer = styled.div`
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const DisclaimerText = styled.div`
    text-align: left;

    p {
        margin: 10px 0;
        font-size: 0.9rem;
        line-height: 1.6;

        &.bold-text {
            font-weight: bold; /* Bold the first disclaimer line */
        }
    }
`;

const Images = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: row; /* Make images stack vertically */

    img {
        margin: 20px auto; /* Center the images */
        width: 100px;
        height: auto;
    }
`;

const FooterBottom = styled.div`
    background-color: #0F2144;
    width: 100%; /* Full width of the page */
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const Left = styled.div`
    flex: 1;
    text-align: left;

    &:hover {
        text-decoration: underline;
    }
`;

const Middle = styled.div`
    flex: 1;
    text-align: center;

    &:hover {
        text-decoration: underline;
    }
`;

const Right = styled.div`
    flex: 1;
    text-align: right;

    &:hover {
        text-decoration: underline;
    }
`;

export default Footer;