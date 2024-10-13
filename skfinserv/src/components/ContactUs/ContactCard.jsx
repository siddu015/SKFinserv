import React from "react";
import styled from "styled-components";

const Form = () => {
    return (
        <StyledWrapper>
            <form
                className="form"
                method="POST"
                name="customContact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                {/* Hidden input to prevent spam bots */}
                <input type="hidden" name="form-name" value="customContact" />
                <input type="hidden" name="bot-field" />

                <div className="flex">
                    <label>
                        <input
                            className="input name-input"
                            type="text"
                            name="firstName"
                            required
                        />
                        <span>First Name</span>
                    </label>

                    <label>
                        <input
                            className="input name-input"
                            type="text"
                            name="lastName"
                            required
                        />
                        <span>Last Name</span>
                    </label>
                </div>

                <label>
                    <input
                        className="input"
                        type="tel"
                        name="phoneNumber"
                        required
                    />
                    <span>Contact Number</span>
                </label>

                <label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        inputMode="email"
                        required
                    />
                    <span>Email</span>
                </label>

                <label>
                    <select className="input select-service" name="services" required>
                        <option value="" hidden>Select Service</option>
                        <option value="Budgeting">Budgeting</option>
                        <option value="Emergency Planning">Emergency Planning</option>
                        <option value="Retirement Solutions">Retirement Solutions</option>
                        <option value="Child Education Planning">
                            Child Education Planning
                        </option>
                        <option value="Wealth Creation & Management">
                            Wealth Creation & Management
                        </option>
                        <option value="Risk Management">Risk Management</option>
                    </select>
                    <span>Services</span>
                </label>

                <label>
                    <textarea
                        className="input"
                        name="message"
                        placeholder="Message"
                        rows={3}
                        required
                    ></textarea>
                </label>

                <button className="fancy" type="submit">
                    <span className="text">Submit</span>
                </button>
            </form>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 650px;
        background-color: rgba(20, 49, 86, 0.9);
        padding: 20px;
        border-radius: 10px;
        position: relative;

        @media (max-width: 1248px) {
            max-width: 100%;
        }
    }

    .flex {
        display: flex;
        width: 100%;
        gap: 6px;

        label {
            width: 100%;
        }
    }

    .name-input {
        width: 300px;
        flex: 1;
    }

    .form label {
        position: relative;
    }

    .input,
    .input01 {
        width: 100%;
        padding: 10px 10px 20px 10px;
        outline: 0;
        border: 1px solid #355891;
        border-radius: 5px;
    }

    .form label .input + span,
    .form label .input01 + span {
        position: absolute;
        left: 10px;
        top: 15px;
        color: #355891;
        font-size: 0.9em;
        cursor: text;
        transition: 0.3s ease;
    }

    .select-service:invalid {
        color: gray;
    }

    .form label .select-service + span {
        position: absolute;
        left: 10px;
        top: 30px;
        color: #355891;
        font-size: 0.7em;
        cursor: text;
        transition: 0.3s ease;
    }

    .form label .input:focus + span,
    .form label .input:valid + span {
        top: 30px;
        font-size: 0.7em;
        font-weight: 600;
    }

    .form label .input:valid + span {
        color: green;
    }

    .fancy {
        background-color: white;
        border: 2px solid #355891;
        border-radius: 0px;
        box-sizing: border-box;
        color: #355891;
        cursor: pointer;
        display: inline-block;
        font-weight: 390;
        letter-spacing: 2px;
        margin: 0;
        outline: none;
        overflow: visible;
        padding: 8px 30px;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        transition: all 0.3s ease-in-out;
        user-select: none;
        font-size: 13px;
    }

    .fancy::before {
        content: " ";
        width: 1.7rem;
        height: 2px;
        background: #355891;
        top: 50%;
        left: 1.5em;
        position: absolute;
        transform: translateX(1220%);
        transform-origin: center;
        transition: background 0.3s linear, width 0.3s linear;

        @media (max-width: 1248px) {
            width: 0;
        }
    }

    .fancy .text {
        font-size: 1.125em;
        line-height: 1.33333em;
        display: block;
        transition: all 0.3s ease-in-out;
        text-transform: lowercase;
        text-decoration: none;
        color: #355891;
        transform: translateX(0%);
    }

    .fancy .top-key {
        height: 2px;
        width: 1.5625rem;
        top: -2px;
        left: 0.625rem;
        position: absolute;
        background: #355891;
        transition: width 0.5s ease-out, left 0.3s ease-out;
    }

    .fancy .bottom-key-1 {
        height: 2px;
        width: 1.5625rem;
        right: 1.875rem;
        bottom: -2px;
        position: absolute;
        background: #355891;
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .fancy .bottom-key-2 {
        height: 2px;
        width: 0.625rem;
        right: 0.625rem;
        bottom: -2px;
        position: absolute;
        background: #355891;
        transition: width 0.5s ease-out, right 0.3s ease-out;
    }

    .fancy:hover {
        color: #355891;
        background: #5f82a9;
    }

    .fancy:hover::before {
        width: 42px;
        background: #355891;

        @media (max-width: 1248px) {
            width: 0;
        }
    }

    .fancy:hover .text {
        color: white;
        padding-left: 2.5em;
    }

    .fancy:hover .top-key {
        right: -2px;
        width: 0px;
    }

    .fancy:hover .bottom-key-1,
    .fancy:hover .bottom-key-2 {
        right: 0;
        width: 0;
    }
`;

export default Form;