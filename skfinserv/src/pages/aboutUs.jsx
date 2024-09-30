import React from "react";
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import styled from "styled-components";
import AboutUsImage from "../assets/Images/AboutUs.jpg";

const AboutUs = () => {
    return (
        <AboutWrapper>
            <Header isRootPage={false} />
            <ImageSection>
                <img src={AboutUsImage} alt="About Us" />
            </ImageSection>
            <ContentSection>
                <ContentBlock>
                    <h2>We Began</h2>
                    <p>
                        Personal finance is more personal than finance. “Advice What's Right" has been the philosophy that has driven the organization since inception. We intend to do things that are right for you. To us, it's not just managing your money but it is about managing your needs in the right way. With years of experience in managing personal finance, we have developed a unique trust amongst our clients. Our "Dream It - Plan It" ideology has helped us in keeping the client's interest at the forefront, thereby establishing a long-term trustworthy relation. We are a handful of people who are passionate about what they do. SK Finserv was founded over a decade ago and since then a consistent and adaptable team has been a key factor for SK Finserv.
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <h3>Success Stories so far</h3>
                    <p>
                        With 1500+ happy families across boundaries, SK Finserv has been managing 50+ crores of assets in the current F.Y.
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <h3>Founders</h3>
                    <p>
                        Prasanth Reddy (founder) is an MBA graduate and personal finance expert. A self-starter and a dynamic leader who drives the overall strategic vision of the organization. He strives to seek simplicity in whatever he does.
                    </p>
                    <p>
                        Siva Jyothsna (co-founder) has done her Bachelor's in Computer Applications. An able administrator and an inspiring leader who oversees different precincts of the organization. She is an important part of the think-tank of the organization and is best at what she does.
                    </p>
                </ContentBlock>
            </ContentSection>
            <Footer />
        </AboutWrapper>
    );
};

// Styled Components
const AboutWrapper = styled.div`
    background-color: white;
    color: black;
    min-height: calc(100vh - 100px); /* Ensuring footer has enough space */
`;

const ImageSection = styled.div`
    width: 100%;
    height: 550px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        height: 350px; /* Adjust height for smaller screens */
    }
`;

const ContentSection = styled.div`
    padding: 50px 140px; /* Adjust padding as needed */
    text-align: center;
    margin-bottom: 2rem; /* Align with footer margin */

    //@media (max-width: 1024px) {
    //    max-width: 1000px; /* Adjust content width for medium screens */
    //    padding: 0 30px; /* Maintain gaps for medium screens */
    //}

    @media (max-width: 768px) {
        padding: 0 40px; /* Reduced padding for mobile */
        max-width: 100%; /* Ensure full width on mobile */
    }

    @media (max-width: 480px) {
        padding: 0 40px; /* Further reduce padding on very small screens */
    }
`;

const ContentBlock = styled.div`

    margin: 20px 0;
    text-align: center; /* Center-align headings */

    h2, h3 {
        margin: 20px 0;
        font-size: 2rem;
    }

    p {
        margin: 10px 0;
        text-align: justify;
        line-height: 1.6;
    }

    /* Responsive adjustments for smaller screens */
    @media (max-width: 1024px) {
        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.4rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.3rem;
        }

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
    
`;

export default AboutUs;