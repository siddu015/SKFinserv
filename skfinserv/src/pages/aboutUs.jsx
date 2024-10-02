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
            <ContentWrapper>
                <ContentContainer>
                    <ContentSection>
                        <ContentBlock>
                            <h2>We Began</h2>
                            <p>
                                Personal finance is more personal than finance.
                                “Advice What's Right" has been the philosophy that has driven the organization since inception.
                                We intend to do things that are right for you.
                                To us, it's not just managing your money but it is about managing your needs in the right way.
                                With years of experience in managing personal finance, we have developed a unique trust amongst our clients.
                                Our "Dream It - Plan It" ideology has helped us in keeping the client's interest at the forefront, thereby establishing a long-term trustworthy relation.
                                We are a handful of people who are passionate about what they do.
                                SK Finserv was founded over a decade ago and since then a consistent and adaptable team has been a key factor for SK Finserv.
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
                                <b> Prasanth Reddy (founder) </b>
                                is an MBA graduate and personal finance expert.
                                A self-starter and a dynamic leader who drives the overall strategic vision of the organization.
                                He strives to seek simplicity in whatever he does.
                            </p>
                            <p>
                                <b>Siva Jyothsna (co-founder) </b>
                                has done her Bachelor's in Computer Applications.
                                An able administrator and an inspiring leader who oversees different precincts of the organization.
                                She is an important part of the think-tank of the organization and is best at what she does.
                            </p>
                        </ContentBlock>
                    </ContentSection>
                </ContentContainer>
            </ContentWrapper>
            <Footer />
        </AboutWrapper>
    );
};

// Styled Components
const AboutWrapper = styled.div`
    background-color: white;
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
`;

const ContentWrapper = styled.div`
    padding: 50px 20px;
    width: 100%;
`;

const ContentContainer = styled.div`
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

const ContentSection = styled.div`
    text-align: justify;
    min-width: 250px;
    width: 100%;

    p {
        line-height: 1.6;
    }

`;

const ContentBlock = styled.div`
    margin: 20px 0;
    text-align: center; 

    h2, h3 {
        margin: 20px 0;
        font-size: 2rem;
    }

    p {
        margin: 10px 0;
        text-align: justify;
        line-height: 1.6;
    }
`;

export default AboutUs;