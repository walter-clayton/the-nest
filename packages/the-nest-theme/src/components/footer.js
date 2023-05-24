import { connect, styled, css } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import BeigeBrownRectangle from "../../../../static/images/beige-brown-rectangle.svg";

const Footer = ({ state, libraries }) => {
    const data = state.source.get("/contact");
    const contactForm = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <>
        <SectionImg src={BeigeBrownRectangle} />
        <MainContainer className="brown-background" id="contact">
            <ParentContainer>
                <OrderOne>
                <Title className="white-title">Get In Touch With Us</Title>
                <Paragraph>
                    <FontAwesomeIcon icon={faLocationDot} size="1x"  css={css`margin-right: 10px;`}/>
                    <ContactLink href="https://maps.google.com/?q=The+Nest+Coffee+Shop+Bramley,+9a+High+St,+Bramley,+Guildford+GU5+0HF,+United+Kingdom">
                        9A High Street Bramley, Guildford, GU5 0HF England
                    </ContactLink>
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faEnvelope} size="1x" css={css`margin-right: 10px;`}/>
                    <ContactLink href="mailto:lucybramley@gmail.com">
                        lucybramley@gmail.com
                    </ContactLink>
                </Paragraph>
                <Paragraph>
                    <FontAwesomeIcon icon={faPhone}  size="1x" css={css`margin-right: 10px;`}/>
                    <ContactLink href="tel:+441483664890">
                        +44 1483 664890
                    </ContactLink>
                </Paragraph>
                </OrderOne>
                <OrderTwo>
                    <ContactForm>
                        <Html2React html={contactForm.content.rendered} />
                    </ContactForm>
                </OrderTwo>
            </ParentContainer>
        </MainContainer>
        <FooterContainer>
            <BottomFooter>
            <Row>
                <FooterBlock>
                    <TitleFooter>Opening Hours</TitleFooter>
                    <Paragraph className="footer-paragraph">Mon-Fri: 8.15 AM - 5:00 PM</Paragraph>
                    <Paragraph className="footer-paragraph">Sat: 9:00 AM - 5:00 PM</Paragraph>
                </FooterBlock>
                <FooterBlock>
                    <TitleFooter>
                        Useful Links
                    </TitleFooter>
                    <Paragraph className="footer-paragraph">
                    <a target="_blank" href="#privacy" css={css`text-decoration: none; color: #6f4e37; border: none; background: none;}`}>
                        Privacy Policy
                    </a>
                    </Paragraph>
                    <Paragraph className="footer-paragraph">
                    <a target="_blank" href="#menu" css={css`text-decoration: none; color: #6f4e37; border: none; background: none;}`}>
                        Menu
                    </a> 
                    </Paragraph>
                </FooterBlock>
                <FooterBlock>
                    <TitleFooter>Social Media</TitleFooter>
                    <Paragraph className="footer-paragraph">
                    <a target="_blank" href="https://www.facebook.com/people/The-Nest-Coffee-Shop/100063685203702/" css={css`text-decoration: none; border: none; background: none;}`}>
                        <FontAwesomeIcon icon={faFacebook} size="2x" css={css`padding: 10px; color:#6f4e37;:hover{color: #F18888;}`}/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/thenest_bramley/" css={css`text-decoration: none; border: none; background: none;}`}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" css={css`padding: 10px; color: #6f4e37;:hover{color: #F18888;}`}/>
                    </a>
                    </Paragraph>
                </FooterBlock>
            </Row>
            <Col className="bottom-footer">
                <BrownLine></BrownLine>
                <Paragraph css={css`color:#6f4e37;`}>© 2023 The Nest, All Rights Reserved</Paragraph>
            </Col>
            </BottomFooter>
        </FooterContainer>
        </>
    );
};

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const BrownLine = styled.hr`
border: 1px solid #A67B5B;
border-radius: 1px;
width: 300px;
margin: 10px;
`;

const Col = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
${mq[2]} {
    margin-top: 0px;
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
${mq[2]} {
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: -10px 0 20px 0;
    border-radius: 0; 
}
`;

const MainContainer = styled.div`
margin-top: -10px;
display: flex;
align-items: center;
flex-direction: column;
background-color: #EFDECD;

&.brown-background{
    background-color: #A67B5B;
}
`;
const ParentContainer = styled.div`
width: 90%;
max-width: 1500px;
margin: 5% auto;
display: flex;
justify-content: space-evenly;
color: white;
overflow: hidden;
${mq[2]} {
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: -10px 0 20px 0;
    border-radius: 0; 
}
`;

const BottomFooter = styled.div`
max-width: 1500px;
margin: auto;
`;

const FooterContainer = styled.div`
margin-top: 50px;
`;

const FooterBlock = styled.div`
text-align: center;
width: 33%;
${mq[2]} { 
    width: 100%;
    margin-bottom: 25px;
}`;

const OrderTwo = styled.div`
align-items: center;
display flex;
flex-direction: column;
margin: auto;
width: 100%;
padding: 30px 0 30px 0;
${mq[2]} {
  width: 80%;
  text-align: center;
}
`;

const OrderOne = styled.div`
align-items: center;
display flex;
flex-direction: column;
margin: auto;
width: 90%;
padding: 30px 0 30px 0;
${mq[2]} {
  width: 80%;
  order: -1;
  text-align: center;
  margin-top: 10%;
}
`;

const Title = styled.h2`
font-size: 32px;
font-weight: 600;
color: #6f4e37;
margin-bottom: 10px;
${mq[2]} { font-size: 22px; margin-bottom: 10px; } &.white-title { color: #ffffff; }`;

const TitleFooter = styled.h3`
font-size: 28px;
font-weight: 600;
color: #6f4e37;
margin-bottom: 10px;
${mq[2]} { font-size: 28px; margin-bottom: 10px; } &.white-title { color: #ffffff; }`;



const Paragraph = styled.p`
font-size: 22px;
padding: 10px 10px;
&.footer-paragraph{color: #6f4e37;}
`;

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 18px;
    input, textarea {
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid transparent;
  }
  [type="submit"] {
   width: fit-content;
   text-decoration: none;
   background-color: white;
   color: black;
   padding: 1rem 2rem;
   font-size: 18px;
   font-weight: 600;
   border-radius: 15px;
   transition: background-color 0.3s ease; &:hover { background-color: #F18888; color: white;}
  }
   span > span {
    margin: 10px 0px;
    background-color: #F18888;
    color: white;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    ${mq[2]} {
        margin: 10px auto 30px auto;
        }
    }
    div > div > div:last-child{
    background-color: #F18888;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    border: 1px solid transparent;
    ${mq[2]} {
        margin: 10px auto 30px auto;
    }
  }
`;

const ContactLink = styled.a`
    text-decoration: none;
    color: white;
`;

const SectionImg = styled.img`width: 100%; height: auto;`;

export default connect(Footer);