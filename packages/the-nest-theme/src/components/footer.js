import { connect, styled, css } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

const Footer = ({ state, libraries }) => {
    const data = state.source.get("/contact");
    const contactForm = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <MainContainer className="brown-background">
            <Title className="white-title">CONTACT</Title>
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
    );
};

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MainContainer = styled.div`
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

const Title = styled.h2`font-size: 38px; font-weight: 700; color: #6f4e37; margin-bottom: 2rem; ${mq[2]} { font-size: 2rem; margin-bottom: 2rem; } &.white-title { color: #ffffff; }`;

const Paragraph = styled.p`
font-size: 22px;
padding: 10px 10px;
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
  }
  div > div > div:last-child{
    background-color: #F18888;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    border: 1px solid transparent;
  }
`;

const ContactLink = styled.a`
    text-decoration: none;
    color: white;
`;

export default connect(Footer);