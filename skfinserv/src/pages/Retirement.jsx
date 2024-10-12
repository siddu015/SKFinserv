import React from 'react';
import styled from 'styled-components';
import Header from "../sections/header.jsx";
import image1 from '../assets/Images/Retirement/image1.png';
import image2 from '../assets/Images/Retirement/image2.png';
import image3 from '../assets/Images/Retirement/image3.png';
import image4 from '../assets/Images/Retirement/image4.png';
import image5 from '../assets/Images/Retirement/image5.png';
import image6 from '../assets/Images/Retirement/image6.png';
import ServicesHeader from "../components/Services/ServicesHeader.jsx";
import Footer from "../sections/footer.jsx";
import InfoCard from "../components/Services/ServiceTemplate3.jsx"; // Adjust the path according to your structure

// Reusable Icon Card Component
const IconCard = ({ image, altText, description }) => (
    <StyledIconCard>
        <IconContent>
            <IconImage src={image} alt={altText} />
            <IconDescription>{description}</IconDescription>
        </IconContent>
    </StyledIconCard>
);

const RetirementPage = () => {
    return (
        <>
            <Header isRootPage={true} />
            <ServicesHeader
                mainHeading={(
                    <>
                        Retirement<br/>
                        Planning
                    </>
                )}
                description={(
                    <>
                        Set your retirement plan in motion today,
                        so you can enjoy the fruits of your hard work when the time comes.
                    </>
                )}
            />

            <ContentWrapper>
                <IntroSection>
                    <SectionHeading>
                        The Good Part is We Are Living Longer <br />
                        The Sad Part is We Have to Pay for It
                    </SectionHeading>
                    <IconsContainer>
                        <IconCard image={image1} altText="Life expectancy" description="Life expectancy is rising" />
                        <IconCard image={image2} altText="Healthcare costs" description="Healthcare costs increase with age" />
                        <IconCard image={image3} altText="Lonely retirement" description="Lonely retirement in small families" />
                    </IconsContainer>
                </IntroSection>

                <InfoCard
                    heading="There are Chances that You May Outlive Your Savings"
                    text={
                        "With people living longer (88-90 years), the concerns and conversations about retirement have grown." +
                        " One might think that they will not live too long, but what if you live longer than you thought?" +
                        " Who will pay for you?"
                    }
                    highlightText="It's you who will have to pay for your Retirement!!"
                    image={image4}
                    imageType="section"
                />

                <InfoCard
                    heading="Retirement is a State of Mind of Being Financially Free"
                    text={
                        "Once you retire, you enter a new stage of life where opportunities are vast and exciting." +
                        " It’s the time when you do what you want to, rather than what you have to. So define what will give you meaning in the next stage of life." +
                        " It’s you who has to decide what would be the next chapter of life called."
                    }
                    highlightText={(<>
                        A New Beginning or An End" <br/>
                        Plan the golden years of your life now!!
                    </>)}
                    image={image5}
                    imageType="icon"
                />

                <InfoCard
                    heading= {( <>
                        Retirement Planning is All About <br/>
                        Disciplined Savings and Disciplined Withdrawal
                    </> )}
                    text=""
                    image={image6}
                    imageType="section"
                />
            </ContentWrapper>

            <Footer />
        </>
    );
};

// Styled Components
const ContentWrapper = styled.div`
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

    @media (max-width: 430px) {
        padding: 30px 20px;
    }
`;

const IntroSection = styled.section`
    max-width: 1200px;
    margin: 0 auto 40px;
    text-align: center;

    @media (max-width: 768px) {
        margin-bottom: 0;
    }
`;

const SectionHeading = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 430px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledIconCard = styled.div`
    flex: 1;
    width: 300px;
    height: 300px;
    padding: 20px;
    //border-radius: 20px;
    //background: rgba(255, 169, 106, 0.30);
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    background: #b19b8c;
    box-shadow: inset 5px 5px 10px #6e6057,
    inset -5px -5px 10px #f4d6c1;
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
        max-width: 90%;
    }

    @media (max-width: 430px) {
        width: 250px;
        height: 300px;
    }
`;

const IconContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconImage = styled.img`
    width: 100px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        width: 80px;
    }

    @media (max-width: 430px) {
        width: 40px;
    }
`;

const IconDescription = styled.p`
    font-size: 1rem;
    text-align: center;
    margin: 0;
    color: #333;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-top: 5px;
    }

    @media (max-width: 430px) {
        font-size: 0.8rem;
        margin-top: 4px;
    }
`;

export default RetirementPage;