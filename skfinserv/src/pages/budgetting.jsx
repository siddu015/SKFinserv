import React from 'react';
import styled from 'styled-components';
import ServiceTemplate from "../components/Services/ServiceTemplate.jsx";
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import ServicesHeader from "../components/Services/ServicesHeader.jsx";
import image21 from "../assets/images/Budgeting/image-21.png";
import image28 from "../assets/images/Budgeting/image-28.png";
import image27 from "../assets/Images/Budgeting/image-27.png"
import image26 from "../assets/Images/Budgeting/image-26.png"
import image25 from "../assets/Images/Budgeting/image-25.png"


const Budgeting = () => {
    const serviceContents = [
        {
            heading: "I BUY - WHAT I WANT - WHEN I WANT",
            paragraphs: [
                "You often wonder that if you have enough money to pay for everything today, " +
                "then why you should keep some money aside for tomorrow. " +
                "But what if your pay checks stop coming or you no longer want to work? " +
                "How would you manage your living?",
                "The problem is after paying for day-to-day needs and other utilities, " +
                "not much is left to save for tomorrow and you fear that you might even miss out on your today. " +
                "Isn't it?"
            ],
            quote: (
                <>
                    You would never have enough to save.
                    It's not about salary, it's about spending choices!!
                </>
            )
        },
        {
            heading: "LITTLE THINGS ADD UP TO MAKE BIG DIFFERENCE",
            paragraphs: [
                "Without a plan you are spending almost everything you earn or more than everything you earn. " +
                "And you don't even have a clue where is it all going. " +
                "Coffee, outing with friends, cab rides, weekend getaways, " +
                "unplanned dinners or 30-minute pizza delivery etc does not seem to make much difference. " +
                "They happen seldom that's what you think.",
                "If you just track down how much you have been spending on these things, " +
                "you would be shocked to see that they consume a major chunk of your income without even letting you know."
            ],
            quote: (
                <>
                    Watch out for the little things you spend on
                    And see whether they are worth it!!
                </>
            )
        },
        {
            heading: "DO YOU HAVE A PLAN TO SPEND",
            paragraphs: [
                "Income lasting till the next paycheck or not struggling to fulfill the day-to-day needs does not mean " +
                "that your finances are sorted. We often think that we would cross the bridge when it comes. " +
                "It's good to live in the moment but what if something crops up which requires you to shell out a " +
                "huge chunk of money? Be it a new gadget you've been looking for or a foreign trip or " +
                "Masters in a reputed university or buying a car or otherwise. The lists can be endless.",
                "What would you compromise on 'your wish' or 'your day-to-day living'? You would not. " +
                "You have to give up something; just plan for them and take time. Make a Budget."
            ],
            quote: (
                <>
                    Budget is not a plan to save
                    It's a plan to spend!!
                </>
            )
        },
        {
            heading: "THE GOLDEN RULE OF 21",
            paragraphs: [
                "It's difficult to forego something you want, when you know you can afford it at that time. " +
                "But what if this thing is not a part of your spending plan? Confused? " +
                "Can't decide whether you should really go for it? Try Rule 21 - just postpone such purchases for 21 days. " +
                "If after 21 days you still have the same urge to buy, then you need it else you don't.<br />",
                "Similarly when you start something new, it's difficult to do it consistently. " +
                "And when it's something like 'Follow a Spending Plan', it's way too difficult. " +
                "Smartphones these days come with a variety of expense tracking or budgeting apps which keep a track of " +
                "what's coming in and going out. If you push yourself hard to do it for 21 days consistently, " +
                "after that you wouldn't be able to do WITHOUT IT."
            ],
            quote: (
                <>
                    If you really want to do something
                    You'll find a Way else an Excuse!!
                </>
            )
        },
        {
            heading: "STOP WISHING START DOING",
            paragraphs: [
                "Taking the first step is the hardest thing to do. " +
                "But as they say, the journey of a thousand miles begins with a single step. " +
                "And now when the to-do lists are already on your mind, it's time to get going.",
                "But when you begin, don't put yourself on a crash diet, else you would not be able to do it for long. " +
                "First and foremost, identify those things which do not hold much importance " +
                "in your life and giving up on them would not hurt you much. This would motivate you to " +
                "go further and get your financial house in order."
            ],
            quote: (
                <>
                    You can't do all at once,
                    Take small steps but be regular!!
                </>
            )
        }
    ];

    return (
        <BudgetingWrapper>
            <Header isRootPage={true} />

            <ServicesHeader
                mainHeading = {(
                <>
                    Budgeting<br/>
                    Solution for You
                </>
                )}
                description={(
                    <>
                        Budgeting solutions for you, to help you plan <br/>
                        your expenses, save money, and reduce debt.
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
                        alt={content.alt} // Pass the alt text as a prop
                    />
                ))}
            </ServicesContent>
            <Footer/>
        </BudgetingWrapper>
);
};


const BudgetingWrapper = styled.div`
    display: flex;
    flex-direction: column; /* Align items vertically */
    align-items: center;    /* Center horizontally */
    justify-content: center; /* Center vertically, if height is defined */
`;

const ServicesContent = styled.div`
    padding: 50px 20px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }
    
    @media (max-width: 430px) {
        padding: 30px 20px;
    }
`;



export default Budgeting;