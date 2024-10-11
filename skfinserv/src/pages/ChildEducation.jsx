import React from 'react';
import styled from 'styled-components';
import ServiceTemplate2 from "../components/Services/ServiceTemplate2.jsx";
import Header from "../sections/header.jsx";
import Footer from "../sections/footer.jsx";
import ServicesHeader from "../components/Services/ServicesHeader.jsx";
import image1 from "../assets/Images/ChildEducation/img.png";
import image2 from "../assets/Images/ChildEducation/img_1.png";
import image3 from "../assets/Images/ChildEducation/img_2.png";

const ChildEducation = () => {
    const serviceContents = [
        {
            heading: "CHOICES ARE IMMENSE",
            paragraphs: [
                "As kids grow their dreams would change very often. " +
                "You don’t know whether your little darling would want to be a doctor or an engineer or an astronaut and so on....\n" +
                "But can you leave their future at the behest of what they decide to become tomorrow? The time to plan for their future is NOW."
            ],
            quote: "Its time to make their dreams a reality!!",
            imageSrc: image1,
            imagePosition: "left",
            altText: "Children's future planning"
        },
        {
            heading: "YOU HAD IT EASY WOULD IT BE EASY FOR YOUR KIDS TOO",
            paragraphs: [
                "The biggest mistake that people do is that they plan considering how much would it cost today. " +
                "But it's not about today; it's about tomorrow. " +
                "Statistics show that the cost of education is high and is rising at astronomical pace. " +
                "What is often ignored are the associated costs such as lodging, gadgets, books and periodicals, " +
                "monthly maintenance etc. The outflow does not end once you send them, it continues till they graduate. " +
                "And what if your kid intends to go abroad for higher education?",

                "Would you be able to fund your children's higher education? You can if you plan ahead and take the right steps."
            ],
            quote: "Don’t let their dreams be dreams!!",
            imageSrc: image2,
            imagePosition: "right",
            altText: "Cost of children's education"
        },
        {
            heading: "THE START ISN’T ENOUGH",
            paragraphs: [
                "When planning for kids, time is the greatest ally. " +
                "The sooner you start, the more equipped you will be. " +
                "But when you start, it's important to start the right way.",

                "Parents often end up buying child plans due to emotional marketing gimmicks. " +
                "Don't let emotions hover practical decisions. " +
                "Focussing exclusively on products that are labelled as Child Plans or otherwise is a big mistake. " +
                "These investment-oriented insurance are neither good insurance nor good investment. " +
                "Have a plan that aids your child to fulfill his/her dreams and not just another Child Plan."
            ],
            quote: "Do it in the right way!!",
            imageSrc: image3,
            imagePosition: "left",
            altText: "Start planning early"
        }
    ];

    return (
        <>
            <Header isRootPage={true} />

            <ServicesHeader
                mainHeading = {(
                    <>
                        Education<br/>
                        for your children
                    </>
                )}
                description={(
                    <>
                        Helping you secure your child’s education,
                        from their first steps to higher studies.
                    </>
                )}
            />
            <ServicesContent>
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

export default ChildEducation;