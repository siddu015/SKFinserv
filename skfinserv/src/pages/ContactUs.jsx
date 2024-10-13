import React from 'react';
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import ContactComponent from "../components/ContactUs/ContactComponent.jsx";
import styled from "styled-components";
import ContactUsImage from "../assets/Images/img.png";

const ContactPage = () => {
    return (
        <>
            <Header isRootPage={true} />

            <ImageSection>
                <img src={ContactUsImage} alt="About Us" />
            </ImageSection>

            <ContactContent>
                <ContactComponent />
                <GoogleMapsSection>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.293379553124!2d78.54876999999999!3d14.7524942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb479d18cb9b967%3A0x6ea83bebf754c96f!2sSK%20Finserv%20%7C%20Best%20Mutual%20fund%20Distributor%20l%20Term%20Insurance%20advisor%20l%20Health%20Insurance%20advisor%20in%20Proddatur!5e0!3m2!1sen!2sin!4v1728736512587!5m2!1sen!2sin"
                        width="1000"
                        height="500"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>

                    <OpenInMapsLink
                        href="https://maps.app.goo.gl/TKVhMesaJCbe6cdv5?g_st=com.google.maps.preview.copy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open in Google Maps
                    </OpenInMapsLink>
                </GoogleMapsSection>
            </ContactContent>

            <Footer/>
        </>
    );
};

const ContactContent = styled.div`
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

    @media (max-width: 430px) {
        padding: 30px 20px;
    }
`;

const ImageSection = styled.div`
    height: 550px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        height: 350px;
    }
    
    @media (max-width: 430px) {
        height: 300px;
    }
`;

const GoogleMapsSection = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    iframe {
        border-radius: 15px;
    }

    @media (max-width: 1248px) {
        iframe {
            width: 80%;
            height: 400px;
        }
    }

    @media (max-width: 768px) {
        iframe {
            height: 300px;
        }
    }
`;

const OpenInMapsLink = styled.a`
    margin-top: 10px;
    color: #1e90ff;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        color: #0b69c2;
    }
`;

export default ContactPage;