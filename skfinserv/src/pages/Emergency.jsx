import React from 'react';
import styled from 'styled-components';
import ServiceTemplate from "../components/Services/ServiceTemplate.jsx";
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import ServicesHeader from "../components/Services/ServicesHeader.jsx";


const Emergency = () => {
    const serviceContents = [
        {
            heading: "EMERGENCIES DON’T KNOCK THE DOOR",
            paragraphs: [
                "Did ever emergencies tell you that they will be coming? No. Hence they never give you\n" +
                "time to get prepared unlike other goals such as kids higher education or their weddings or your retirement etc. " +
                "Emergencies can be as small as a loss/damage of your smart phone or as big as a temporary loss of " +
                "income due to major illness or other mishaps. No matter how small or big they are, " +
                "they can derail your finances and bring discomfort to your lives."
            ],
            quote: (
                <>
                    Expect The Unexpected & Be Prepared!!
                </>
            )
        },
        {
            heading: "SAVING ACCOUNT IS NOT AN EMERGENCY FUND",
            paragraphs: [
                "Is your savings account your Emergency Fund too? " +
                "If that is the case then there are chances that you may " +
                "not be able to meet your day-to-day needs in times of emergencies. " +
                "Savings account is that one stop solution which fulfills all your needs and can fulfill all your wants." +
                "Hence it's difficult to control the urge of leaving that exotic vacation or that latest smart phone or that weekend party etc. " +
                "Just for fighting with those unforeseen emergencies that may or may not come."
            ],
            quote: (
                <>
                    What if emergencies hit you when you
                    don't have enough money in account!!
                </>
            )
        },
        {
            heading: "DON'T DIP INTO OTHER GOALS SAVINGS",
            paragraphs: [
                "Financial Assets offer the ease to withdraw at will. This often turns out as the biggest\n" +
                "disadvantage when all financial assets are treated as money in hand. Emergencies\n" +
                "create worrisome situations and leave us in despair. To combat such times we tend\n" +
                "to dip into the savings done for other goals. If you will do it once, you will do it again\n" +
                "and again whenever you need money."
                ],
            quote: (
                <>
                    Is it right to cater to present needs at
                    the cost of future needs!!
                </>
            )
        },
        {
            heading: "ITS TIME FOR AN EMERGENCY BUCKET",
            paragraphs: [
                "It's best to have a separate fund to cater emergencies. " +
                "But what should it look like? How big should it be? " +
                "Should you open a separate bank account or keep some cash reserves? " +
                "The answer is Have a Liquid Fund. " +
                "Liquid Fund is a new age financial tool and by far one of the best tools to build an emergency fund. " +
                "Just like your savings account, liquid fund offers you the ease to deposit or withdraw money any time and\n" +
                "offers more return than your Savings Account."
            ],
            quote: (
                <>
                    Save whatever you can, even if it isn't much
                    Someday you'll be glad you did!!
                </>
            )
        }
    ];

    return (
        <>
            <Header isRootPage={true} />

            <ServicesHeader
                mainHeading = {(
                    <>
                        Emergency<br/>
                        Planning
                    </>
                )}
                description={(
                    <>
                        Emergencies don't come knocking on the door.
                        Emergency planning can help you from getting derailed from your life goals.
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
                    />
                ))}
            </ServicesContent>
            <Footer/>
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



export default Emergency;