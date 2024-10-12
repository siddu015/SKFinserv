import React from 'react';
import styled from 'styled-components';
import ServiceTemplate from "../components/Services/ServiceTemplate.jsx";
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import ServicesHeader from "../components/Services/ServicesHeader.jsx";

const Wealth = () => {
    const serviceContents = [
        {
            heading: "Wealth Creation and Management",
            paragraphs: [
                "Everyone wants to accumulate wealth. Wealth may mean different things to different people. " +
                "To some, it may mean achieving financial independence, to others, boosting their net worth and so on. " +
                "Often we keep wondering 'What's the best way to create wealth' or 'What is it that would make us rich?'",

                "Wait, there's a difference between the two. Sounds crazy? But that's the reality. " +
                "Being rich means having more money, but being wealthy means having *sustainable wealth*."
            ],
            quote: (
                <>
                    Building wealth is a marathon, not a sprint.
                    <br />
                    Discipline is the key ingredient.
                </>
            )
        },
        {
            heading: "Wealth Creation with the Power of Compounding",
            paragraphs: [
                "The golden rule of investment is to give it time. The more time you stay invested, the more wealth you’ll accumulate. " +
                "You might think, why go for long-term investment for wealth creation? The answer is simple: " +
                "the more you wait, the more you’ll maximize the benefit of *COMPOUNDING*.",

                "Not money, not skills, but *Time* is the biggest lever for massive wealth creation."
            ],
            quote: (
                <>
                    Focus on the accumulation rather than return!
                </>
            )
        },
        {
            heading: "SIP: The Super Accumulation Plan",
            paragraphs: [
                "SIP is the best accumulation product in the market – it brings in discipline and delivers a whole lot more in returns over time. " +
                "Think of it as a *Super Accumulation Plan*. Focus on the accumulation aspect with returns coming in as a bonus – " +
                "rather than focusing on the returns with accumulation coming in as a bonus.",

                "Even if you don't have a lump sum amount to invest, SIP (Systematic Investment Plan) allows you to invest small amounts at regular intervals. " +
                "Start small, increase your wealth creation goal, and invest more as your income grows."
            ],
            quote: (
                <>
                    Wealth creation is not a smooth ride.
                </>
            )
        },
        {
            heading: "Stay Calm in the Face of Uncertainty",
            paragraphs: [
                "It's amazing to see people amassing wealth through investing, and it seems really simple to do so. Indeed, it's *SIMPLE NOT EASY*. " +
                "Our natural tendency to look for patterns, compare things, or seek the safest options often hinders wealth creation.",

                "Those who remain calm and composed when everyone else is panicking are the ones who create wealth."
            ],
            quote: (
                <>
                    Money, IQ, or markets don't define your investing success;
                    <br />
                    It's only you who defines it!!
                </>
            )
        }
    ];

    return (
        <>
            <Header isRootPage={true} />

            <ServicesHeader
                mainHeading={(
                    <>
                        Wealth<br/>
                        Creation
                    </>
                )}
                description={(
                    <>
                        Helping you plan for funds, investment and growth hacks for better future & ability to handle fluctuations in economy.
                    </>
                )}
            />

            <ServicesContent>
                {serviceContents.map((content, index) => (
                    <ServiceTemplate
                        key={index}
                        heading={content.heading}
                        paragraphs={content.paragraphs}
                        quote={content.quote}
                        imageSrc={content.imageSrc}
                        imagePosition={content.imagePosition}
                        alt={content.alt}
                    />
                ))}
            </ServicesContent>

            <Footer />
        </>
    );
};

const ServicesContent = styled.div`
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }

    @media (max-width: 430px) {
        padding: 30px 20px;
    }
`;

export default Wealth;