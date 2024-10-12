import { Fragment, useState, useCallback, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
    {
        author: {
            fullName: "Seetharam Sharma",
            picture: "https://img.freepik.com/premium-photo/young-smiling-man-cartoon-showing-ok-sign_894067-15510.jpg",
            designation: "Customer",
        },
        rating: 5,
        description: "I have been associated with SK Finserv for over 3 years now. Their guidance and timely advice helped me to plan for my daughter's marriage and my early retirement. They helped me to create wealth as well as protect it through Term Insurance and Health Insurance. I am fully satisfied with their service and knowledge in personal finance. My association with SK Finserv has been rewarding, and I have recommended their services to many friends and relatives."
    },
    {
        author: {
            fullName: "Veera Prasad Reddy Narreddy",
            picture: "https://img.freepik.com/premium-photo/young-smiling-man-cartoon-showing-ok-sign_894067-15510.jpg",
            designation: "Customer",
        },
        rating: 4.5,
        description: "I have chosen SK Finserv as my investment advisor. It’s been a pleasant experience working with Prasanth and his team. He has extensive knowledge on strategic, timely investments and offers great products (Mutual Funds, Insurance, etc.) for consideration. It’s been over 5 years associating with SK Finserv, and I look forward to many more years in reaching my objectives."
    },
    {
        author: {
            fullName: "Guru Praveen Reddy",
            picture: "https://img.freepik.com/premium-photo/young-smiling-man-cartoon-showing-ok-sign_894067-15510.jpg",
            designation: "Customer",
        },
        rating: 4.5,
        description: "Managing my investments with SK Finserv has been one of the best decisions I’ve made. I was referred to them by a friend and was fortunate enough to have Mr. Prasanth personally oversee my investments. It’s been several years, and my investments have grown despite volatile markets. My trust in their advice has only deepened."
    },
    {
        author: {
            fullName: "Urukundu Reddy",
            picture: "https://img.freepik.com/premium-photo/young-smiling-man-cartoon-showing-ok-sign_894067-15510.jpg",
            designation: "Customer",
        },
        rating: 4.5,
        description: "SK Finserv is truly the best place with the best team to provide excellent investment advice. They have vast knowledge about markets and different types of investment instruments. I’m pleased to say that my investments are in the right place, guided by market experts."
    },
    {
        author: {
            fullName: "Sivakesava Yellam",
            picture: "https://img.freepik.com/premium-photo/young-smiling-man-cartoon-showing-ok-sign_894067-15510.jpg",
            designation: "Customer",
        },
        rating: 4,
        description: "Three years with SK Finserv has been rewarding. Prasanth's expertise helps me make sound financial decisions. I highly recommend their personal finance services. As a satisfied customer, their commitment truly stands out."
    },
    {
        author: {
            fullName: "Madan",
            picture: "https://img.freepik.com/premium-photo/young-smiling-man-cartoon-showing-ok-sign_894067-15510.jpg",
            designation: "Customer",
        },
        rating: 5,
        description: "I finally found a financial advisor I can trust. Mr. Prasanth is always respectful, proactive, and puts my needs first."
    }
];

// Inline Rating Component with memoization to avoid unnecessary re-renders
const Rating = memo(({ rating, showLabel, className, ...rest }) => (
    <p className={classNames("mb-6", className)} {...rest}>
        {[...Array(5)].map((_, i) => {
            const index = i + 1;
            let content = "";
            if (index <= Math.floor(rating)) {
                content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
            } else if (rating > i && rating < index + 1) {
                content = <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />;
            } else {
                content = <FontAwesomeIcon icon={faStar} className="text-yellow-200 dark:text-opacity-20" />;
            }
            return <Fragment key={i}>{content}</Fragment>;
        })}
        {showLabel && <span>{rating.toFixed(1)}</span>}
    </p>
));

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    showLabel: PropTypes.bool,
    className: PropTypes.string,
};

// Optimized Testimonial15 Component
const Testimonial15 = () => {
    const [index, setIndex] = useState(0);
    const { author, description, rating } = testimonialList[index];

    // Memoize control handlers to prevent unnecessary re-creation
    const handleControl = useCallback(
        (type) => {
            setIndex((prevIndex) => {
                if (type === "prev") {
                    return prevIndex <= 0 ? testimonialList.length - 1 : prevIndex - 1;
                } else {
                    return prevIndex >= testimonialList.length - 1 ? 0 : prevIndex + 1;
                }
            });
        },
        [index]
    );

    return (
        <section className="ezy__testimonial15 light mt-[60px] mb-[60px]  py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center text-center mb-6 lg:mb-12">
                    <div className="max-w-lg">
                        <h2 className="text-10xl leading-none md:text-[45px] font-bold mb-6">
                            What our customers say
                        </h2>
                        <p>Testimonials that reflect our dedication to your financial success...</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="max-w-5xl">
                        <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 mt-12">
                            <div className="col-span-12 md:col-span-5 lg:col-start-8 text-center lg:order-2">
                                <div className="relative z-[1]">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#eb5757] rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -z-[1]" />
                                    <img
                                        src={author.picture}
                                        alt={author.fullName}
                                        className="rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -translate-x-2 -translate-y-2 md:-translate-x-6 md:-translate-y-6 hover:translate-x-0 hover:translate-y-0 transition duration-300"
                                    />
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6 ezy__testimonial15-content text-center md:text-start">
                                <div className="flex flex-col justify-center h-full">
                                    <Rating rating={rating} showLabel={false} />
                                    <h4 className="text-2xl font-medium mb-1">{author.fullName}</h4>
                                    <p className="mb-6">{author.designation}</p>
                                    <p className="opacity-75">{description}</p>

                                    <div className="mt-12">
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                                            onClick={() => handleControl("prev")}
                                        >
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                        <button
                                            className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                            onClick={() => handleControl("next")}
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial15;
