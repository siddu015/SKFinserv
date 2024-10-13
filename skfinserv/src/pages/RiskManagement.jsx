import React from 'react';
import styled from 'styled-components';
import ServiceTemplate2 from "../components/Services/ServiceTemplate2.jsx";
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import ServicesHeader from "../components/Services/ServicesHeader.jsx";
import image1 from "../assets/Images/RiskManagement/img.png";
import image2 from "../assets/Images/RiskManagement/img_1.png";
import image3 from "../assets/Images/RiskManagement/img_2.png";
import image4 from "../assets/Images/RiskManagement/img_3.png";

const RiskManagement = () => {
    const serviceContents = [
        {
            heading: "INSURANCE IS A GLUE  THAT HOLDS THE PLAN TOGETHER",
            paragraphs: [
                "Life is like that roller coaster ride which brings along with it many twists and turns " +
                "wherein one mishap can derail the entire life. " +
                "Mishaps can and do happen and that is the time when you wonder " +
                "if you could foresee the future and prevent the unfortunate."
            ],
            quote: "Make sure you have a cover when you need it!!",
            imageSrc: image2,
            imagePosition: "right",
            altText: "Insurance is glue"
        },
        {
            heading: "HAVING A COVER IS NOT ENOUGH",
            paragraphs: [
                "Buying an insurance is often treated as a customary by people. " +
                "For the sake of having insurance, people end up buying inadequate protection for themselves and their loved ones. " +
                "But what is often overlooked is \"would this be enough to get the mishaps\"?",

                "Falling short of money when you need it the most is devastating. " +
                "And what if, you fall short of money in these \"Oh my god situations of life\"? Cant imagine!"

            ],
            quote: "Cover yourself but not halfway!!",
            imageSrc: image3,
            imagePosition: "left",
            altText: "Having a cover"
        }
    ];

    return (
        <>
            <Header isRootPage={true} />

            <ServicesHeader
                mainHeading = {(
                    <>
                        Risk<br/>
                        Management
                    </>
                )}
                description={(
                    <>
                        Helping you plan for funds, investment and growth hacks for better future
                        & ability to handle fluctuations in economy.
                    </>
                )}
            />


            <Content>
                <Section1>
                    <SectionHeading> THE OH MY GOD SITUATIONS OF LIFE </SectionHeading>
                    <img src={image1} alt="Life Situations"/>
                    <HighlightText> Protect yourself from life's unexpected but inevitable ups and downs!! </HighlightText>
                </Section1>


                <Section2>
                    {serviceContents.map((content, index) => (
                        <ServiceTemplate2
                            key={index}
                            heading={content.heading}
                            paragraphs={content.paragraphs}
                            quote={content.quote}
                            imageSrc={content.imageSrc}
                            imagePosition={content.imagePosition}
                            altText={content.altText}
                        />
                    ))}
                </Section2>


                <Section3>
                    <SectionHeading>DO WHAT’S RIGHT BUT DO IT THE RIGHT WAY</SectionHeading>
                    <img src={image4} alt="What's right"/>
                    <SectionText>
                        Investment in insurance - a marketing gimmick has taught us that insurance has a maturity value.
                        But when it comes to vehicle insurance, we do not ask for maturity value.
                        Do We? In reality, insurance is meant to compensate only if something were to go wrong.
                        Hence, whatever amount you pay as premium is only an expense to protect you and your loved ones against the what-if situations of life.
                    </SectionText>
                    <HighlightText> Pay the premium to protect the present and invest the difference for future!! </HighlightText>
                </Section3>
            </Content>


            <Footer/>
        </>
    );
};

const Content = styled.section`
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

    @media (max-width: 430px) {
        padding: 30px 20px;
    }
`;

const Section1 = styled.section`
    text-align: center;
    padding: 20px;
    margin-bottom: 40px;
    
    
    
    img {
        max-width: 80%;
        display: block; /* Centering the image */
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
    @media (max-width: 430px) {
        padding: 10px;
    }
`;

const Section2 = styled.div`
`;

const SectionHeading = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-top: 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 430px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

const HighlightText = styled.h3`
    font-size: 22px;
    color: #3980a9;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 430px) {
        font-size: 0.9rem;
    }
`;

const Section3 = styled.section`
    text-align: center;
    padding: 20px;
    margin-bottom: 40px;
    margin-top: 40px;
    
    img {
        //max-width: 1160px;
        max-width: 86%;
        display: block; /* Centering the image */
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }

    @media (max-width: 430px) {
        padding: 10px;
        margin-bottom: 20px;
    }
`;

const SectionText = styled.p`
    font-size: 18px;
    max-width: 1150px;
    text-align: justify;
    margin: 20px auto 20px;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }

    @media (max-width: 430px) {
        font-size: 0.85rem;
    }
`;

export default RiskManagement;