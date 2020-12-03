import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaGoodreads, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, SocialIconLink, SocialIcons, WebsiteRights} from './Footer.elements';

const Footer = () => {
    return (
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news and trends.
                    </FooterSubHeading>
                    <FooterSubText>
                        You can subscribe at any time.
                    </FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email"></FormInput>
                            <Button>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                            <FooterLink to="/services">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                            <FooterLink to="/services">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                            <FooterLink to="/services">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Reviews</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                            <FooterLink to="/services">Terms of Service</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>CPaaSelector
                    </SocialLogo>
                    <WebsiteRights>
                        CPaaSelector©2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Gmail" >
                            <FaGoodreads/>
                        </SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>                       
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
