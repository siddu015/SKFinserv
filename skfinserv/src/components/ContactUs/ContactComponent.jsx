import React from 'react';
import styled from 'styled-components';
import ContactCard from "./ContactCard.jsx";
import PhoneIcon from "../../assets/icons/PhoneIcon.png";
import MailIcon from "../../assets/icons/MailIcon.png";
import LocationIcon from "../../assets/icons/LocationIcon.png";


const ContactPage = () => {
    return (
        <ContactWrapper>
                <div className="contact-container">
                    <div className="left-section">
                        <h1>Contact Us</h1>
                        <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
                        <ContactCard />
                    </div>
                    <div className="right-section">
                        <GetInTouch>
                            <h3>Get in Touch</h3>
                            <div>
                                <img src={PhoneIcon} alt="Phone Icon" />
                                <p>+91 9397682824</p>
                            </div>
                            <div>
                                <img src={MailIcon} alt="Mail Icon" />
                                <p>mail.skfinserv@gmail.com</p>
                            </div>
                            <div>
                                <img src={LocationIcon} alt="Location Icon" />
                                <p> Room No - 6, First Floor, <br />
                                    Opp to Prasad Reddy Hospital, <br />
                                    Sreeramula Peta, Proddatur, <br />
                                    Andhra Pradesh 516360
                                </p>
                            </div>
                        </GetInTouch>
                    </div>
                </div>
            </ContactWrapper>

    );
};

// Styled components for layout and styling
const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    
    @media (max-width: 430px) {
        padding: 20px;
    }
    
    .contact-container {
        max-width: 1200px;
        display: flex;
        width: 90%;
        background-color: rgba(20, 49, 86, 0.25);
        border-radius: 25px;
        padding: 2rem;
        gap: 2rem;
        position: relative;

        @media (max-width: 1248px) {
            width: 100%;
            flex-direction: column; /* Stack sections vertically below 1290px */
            gap: 1rem;
        }

        @media (max-width: 768px) {
            padding: 20px;
        }
        
        @media (max-width: 430px) {
            //width: 110%;
            padding: 10px;
        }
    }

    .left-section {
        flex: 2;
        padding: 30px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

        @media (max-width: 1248px) {
            flex: 1;
        }

        @media (max-width: 768px) {
            padding: 20px;
        }

        @media (max-width: 480px) {
            padding: 10px;
        }
    }

    .right-section {
        flex: 1;
        background-color: rgba(20, 49, 86, 0.8);
        max-width: 400px;
        max-height: 400px;
        border-radius: 20px 0 0 20px; /* Rounded top-left and bottom-left corners */
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        padding: 30px;
        right: 0;
        top: 60%;
        transform: translateY(-50%);

        @media (max-width: 1248px) {
            max-width: 100%;
            position: static; /* Remove absolute positioning */
            transform: none;
            border-radius: 10px; /* Rounded corners on all sides */
            margin: 30px;
        }

        @media (max-width: 768px) {
            margin: 20px;
        }
        @media (max-width: 480px) {
            padding: 20px;
            margin: 10px;
        }
        
    }

    h1 {
        color: #1e3a5f;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 10px;

        @media (max-width: 1248px) {
            font-size: 2rem; 
        }

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    p {
        margin-bottom: 2rem;
        color: #555;
        font-size: 1.1rem;

        @media (max-width: 1248px) {
            font-size: 1rem; /* Slightly reduce font size */
        }

        @media (max-width: 768px) {
            font-size: 0.95rem;
        }

        @media (max-width: 480px) {
            font-size: 0.85rem;
        }
    }
`;

const GetInTouch = styled.div`
    flex: 1;
    color: white;

    h3 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
        

        @media (max-width: 1248px) {
            font-size: 2rem;
        }

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }
    
    div {
        display: flex;
        align-items: flex-start;

        p {
            color: white;
        }

        img {
            width: 24px;
            height: auto;
            margin-right: 1rem;
        }
    }

    @media (max-width: 1248px) {
        div {
            p {
                color: white;
                margin-bottom:25px;
            }
        }
    }
    
    @media (max-width: 768px) {
        div {
            img {
                width: 20px;
            }
            
            p {
                color: white;
                text-decoration: none;
                margin-bottom: 20px;
            }
        }
    }

    @media (max-width: 430px) {
        div {
            img {
                color: white;
                text-decoration: none;
                width: 16px;
            }
        }
    }
`;

export default ContactPage;
