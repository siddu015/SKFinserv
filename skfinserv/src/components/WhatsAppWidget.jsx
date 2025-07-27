import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import FinradixLogo from '../assets/Images/Finradix.jpeg';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const phoneNumber = '919397682824'; 
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const handleChatClick = () => {
        const message = "Hi! I'd like to know more about your financial services from Finradix.";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Floating Button - Hide when dialog is open */}
            {!isOpen && (
                <FloatingButton onClick={toggleChat}>
                    <PulseRing />
                    <WhatsAppIcon>
                        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                        </svg>
                    </WhatsAppIcon>
                    <NotificationBadge>1</NotificationBadge>
                </FloatingButton>
            )}

            {/* Chat Window */}
            {isOpen && (
                <>
                    <ChatOverlay onClick={toggleChat} />
                    <ChatWindow>
                        <ChatHeader>
                            <HeaderLeft>
                                <CompanyLogo>
                                    <LogoCircle>
                                         <LogoImage src={FinradixLogo} alt="Finradix Logo" />
                                    </LogoCircle>
                                </CompanyLogo>
                                <HeaderContent>
                                    <CompanyName>Finradix</CompanyName>
                                    <CompanyTagline>Your Trusted Financial Advisory Partner</CompanyTagline>
                                </HeaderContent>
                            </HeaderLeft>
                            <HeaderActions>
                                <CloseButton onClick={toggleChat}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                    </svg>
                                </CloseButton>
                            </HeaderActions>
                        </ChatHeader>
                        
                        <ChatBody>
                            <ServiceSection>
                                <SectionHeading>How can we help you today?</SectionHeading>
                                
                                <ServicesGrid>
                                    <ServiceCard onClick={() => {
                                        const message = "Hi! I'm interested in financial budgeting and expense planning. Can you help me create a budget plan?";
                                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappURL, '_blank');
                                    }}>
                                        <ServiceIcon>💰</ServiceIcon>
                                        <ServiceName>Budgeting</ServiceName>
                                    </ServiceCard>

                                    <ServiceCard onClick={() => {
                                        const message = "Hi! I want to create an emergency fund and plan for unexpected expenses. Can you guide me?";
                                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappURL, '_blank');
                                    }}>
                                        <ServiceIcon>🚨</ServiceIcon>
                                        <ServiceName>Emergency Planning</ServiceName>
                                    </ServiceCard>

                                    <ServiceCard onClick={() => {
                                        const message = "Hi! I'm looking for child education planning and want to secure my child's future education. Can you help?";
                                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappURL, '_blank');
                                    }}>
                                        <ServiceIcon>🎓</ServiceIcon>
                                        <ServiceName>Child Education</ServiceName>
                                    </ServiceCard>

                                    <ServiceCard onClick={() => {
                                        const message = "Hi! I'm interested in retirement planning and want to secure my future. Can you help me plan?";
                                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappURL, '_blank');
                                    }}>
                                        <ServiceIcon>🏖️</ServiceIcon>
                                        <ServiceName>Retirement Solutions</ServiceName>
                                    </ServiceCard>

                                    <ServiceCard onClick={() => {
                                        const message = "Hi! I want to understand risk management and protect my finances with proper insurance. Can you guide me?";
                                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappURL, '_blank');
                                    }}>
                                        <ServiceIcon>🛡️</ServiceIcon>
                                        <ServiceName>Risk Management</ServiceName>
                                    </ServiceCard>

                                    <ServiceCard onClick={() => {
                                        const message = "Hi! I'm interested in wealth creation and management. Can you help me grow and manage my wealth?";
                                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappURL, '_blank');
                                    }}>
                                        <ServiceIcon>📈</ServiceIcon>
                                        <ServiceName>Wealth Management</ServiceName>
                                    </ServiceCard>
                                </ServicesGrid>
                                
                                <GeneralChatButton onClick={handleChatClick}>
                                    <WhatsAppButtonIcon>
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                        </svg>
                                    </WhatsAppButtonIcon>
                                    Start WhatsApp Chat
                                </GeneralChatButton>
                            </ServiceSection>
                        </ChatBody>
                    </ChatWindow>
                </>
            )}
        </>
    );
};

// Animations
const pulse = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.3);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// Styled Components
const FloatingButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #4A90A4, #2c5aa0);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(74, 144, 164, 0.3);
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${fadeIn} 0.5s ease-out;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 35px rgba(74, 144, 164, 0.4);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
        bottom: 30px;
        right: 25px;
        box-shadow: 0 6px 20px rgba(74, 144, 164, 0.3);
    }

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        bottom: 25px;
        right: 20px;
    }

    @media (max-width: 360px) {
        width: 45px;
        height: 45px;
        bottom: 20px;
        right: 15px;
    }
`;

const PulseRing = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #4A90A4;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
    opacity: 0.6;
`;

const NotificationBadge = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ff4757;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
        font-size: 10px;
        border: 2px solid white;
        top: -3px;
        right: -3px;
    }

    @media (max-width: 480px) {
        width: 18px;
        height: 18px;
        font-size: 9px;
        top: -2px;
        right: -2px;
    }
`;

const WhatsAppIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;

    svg {
        @media (max-width: 768px) {
            width: 26px;
            height: 26px;
        }

        @media (max-width: 480px) {
            width: 24px;
            height: 24px;
        }
    }
`;

const ChatOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 998;
    animation: ${fadeIn} 0.3s ease-out;
    backdrop-filter: blur(2px);

    @media (max-width: 768px) {
        background: rgba(0, 0, 0, 0.5);
    }
`;

const ChatWindow = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 400px;
    max-height: 600px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    z-index: 999;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    animation: ${slideUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 320px;
        max-height: 450px;
        bottom: 90px;
        right: 25px;
        border-radius: 15px;
    }

    @media (max-width: 480px) {
        width: 270px;
        max-height: 380px;
        bottom: 80px;
        right: 20px;
        border-radius: 12px;
    }

    @media (max-width: 360px) {
        width: 240px;
        max-height: 340px;
        bottom: 70px;
        right: 15px;
        border-radius: 10px;
    }

    @media (max-width: 320px) {
        width: 220px;
        max-height: 320px;
        bottom: 65px;
        right: 10px;
        border-radius: 8px;
    }
`;

const ChatHeader = styled.div`
    background: linear-gradient(135deg, #4A90A4, #2c5aa0);
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 12px 15px;
    }

    @media (max-width: 480px) {
        padding: 10px 12px;
    }

    @media (max-width: 360px) {
        padding: 8px 10px;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1;

    @media (max-width: 768px) {
        gap: 12px;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }

    @media (max-width: 360px) {
        gap: 8px;
    }
`;

const CompanyLogo = styled.div`
    flex-shrink: 0;
`;

const LogoCircle = styled.div`
    width: 55px;
    height: 55px;
    background: linear-gradient(135deg, #ffffff, #f8f9fa);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 3px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 480px) {
        width: 35px;
        height: 35px;
    }

    @media (max-width: 360px) {
        width: 30px;
        height: 30px;
    }
`;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

const HeaderContent = styled.div`
    flex: 1;
`;

const CompanyName = styled.h3`
    margin: 0 0 4px 0;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
        font-size: 16px;
        margin: 0 0 2px 0;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        margin: 0;
    }

    @media (max-width: 360px) {
        font-size: 13px;
    }
`;

const CompanyTagline = styled.div`
    margin: 0;
    font-size: 13px;
    opacity: 0.9;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 11px;
        line-height: 1.1;
    }

    @media (max-width: 480px) {
        font-size: 8px;
        line-height: 1.0;
    }

    @media (max-width: 360px) {
        font-size: 6px;
        line-height: 1.0;
    }
`;

const HeaderActions = styled.div`
    display: flex;
`;

const CloseButton = styled.button`
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 82, 82, 0.8);
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        width: 28px;
        height: 28px;
    }

    @media (max-width: 480px) {
        width: 26px;
        height: 26px;
    }

    @media (max-width: 360px) {
        width: 24px;
        height: 24px;
    }

    svg {
        @media (max-width: 768px) {
            width: 16px;
            height: 16px;
        }

        @media (max-width: 480px) {
            width: 14px;
            height: 14px;
        }

        @media (max-width: 360px) {
            width: 12px;
            height: 12px;
        }
    }
`;

const ChatBody = styled.div`
    padding: 0;
    background: white;
    max-height: 550px;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }

    @media (max-width: 768px) {
        max-height: 350px;
        
        &::-webkit-scrollbar {
            width: 4px;
        }
    }

    @media (max-width: 480px) {
        max-height: 280px;
        
        &::-webkit-scrollbar {
            width: 3px;
        }
    }

    @media (max-width: 360px) {
        max-height: 240px;
        
        &::-webkit-scrollbar {
            width: 2px;
        }
    }

    @media (max-width: 320px) {
        max-height: 220px;
        
        &::-webkit-scrollbar {
            width: 2px;
        }
    }
`;

const ServiceSection = styled.div`
    padding: 25px 20px;

    @media (max-width: 768px) {
        padding: 15px 12px;
    }

    @media (max-width: 480px) {
        padding: 12px 8px;
    }

    @media (max-width: 360px) {
        padding: 10px 6px;
    }

    @media (max-width: 320px) {
        padding: 8px 5px;
    }
`;

const SectionHeading = styled.h3`
    margin: 0 0 20px 0;
    color: #2c3e50;
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 15px;
        margin: 0 0 12px 0;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        margin: 0 0 10px 0;
    }

    @media (max-width: 360px) {
        font-size: 13px;
        margin: 0 0 8px 0;
    }
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        gap: 8px;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        gap: 6px;
        margin-bottom: 12px;
    }

    @media (max-width: 360px) {
        gap: 5px;
        margin-bottom: 10px;
    }
`;

const ServiceCard = styled.button`
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border: 2px solid #e9ecef;
    border-radius: 15px;
    padding: 16px 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-height: 80px;

    &:hover {
        background: linear-gradient(135deg, #4A90A4, #2c5aa0);
        border-color: #4A90A4;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(74, 144, 164, 0.3);

    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 10px 6px;
        min-height: 65px;
        gap: 5px;
        border-radius: 10px;
        border: 1px solid #e9ecef;
    }

    @media (max-width: 480px) {
        padding: 8px 4px;
        min-height: 55px;
        gap: 3px;
        border-radius: 8px;
    }

    @media (max-width: 360px) {
        padding: 6px 3px;
        min-height: 50px;
        gap: 2px;
        border-radius: 6px;
    }

    @media (max-width: 320px) {
        padding: 5px 2px;
        min-height: 45px;
        gap: 1px;
        border-radius: 5px;
    }
`;

const ServiceIcon = styled.div`
    font-size: 20px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }

    @media (max-width: 360px) {
        font-size: 12px;
    }

    @media (max-width: 320px) {
        font-size: 10px;
    }
`;

const ServiceName = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #495057;
    transition: color 0.3s ease;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 10px;
        line-height: 1.1;
    }

    @media (max-width: 480px) {
        font-size: 9px;
        line-height: 1.0;
    }

    @media (max-width: 360px) {
        font-size: 8px;
        font-weight: 500;
    }

    @media (max-width: 320px) {
        font-size: 7px;
        font-weight: 500;
        line-height: 0.9;
    }
`;

const GeneralChatButton = styled.button`
    width: 100%;
    background: linear-gradient(135deg, #4A90A4, #2c5aa0);
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(74, 144, 164, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(74, 144, 164, 0.4);
        background: linear-gradient(135deg, #2c5aa0, #1e3a8a);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 18px;
        gap: 6px;
    }

    @media (max-width: 480px) {
        padding: 8px 10px;
        font-size: 11px;
        border-radius: 12px;
        gap: 3px;
    }

    @media (max-width: 360px) {
        padding: 6px 8px;
        font-size: 10px;
        border-radius: 10px;
        gap: 2px;
    }

    @media (max-width: 320px) {
        padding: 5px 6px;
        font-size: 9px;
        border-radius: 8px;
        gap: 1px;
    }

    svg {
        @media (max-width: 768px) {
            width: 16px;
            height: 16px;
        }

        @media (max-width: 480px) {
            width: 12px;
            height: 12px;
        }

        @media (max-width: 360px) {
            width: 10px;
            height: 10px;
        }

        @media (max-width: 320px) {
            width: 9px;
            height: 9px;
        }
    }
`;

const WhatsAppButtonIcon = styled.div`
    display: flex;
    align-items: center;
`;

export default WhatsAppWidget; 