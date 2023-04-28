import { connect, styled } from "frontity";
import TheNestLogo from "../../../../static/images/thenest-logo-white.svg";

const Hero = () => {
    return (
        <MainContainer>
            <ParentContainer>
                <OrderOne>
                    <Title>Your Super Friendly Coffee Shop</Title>
                    <CTA href="#menu">Menu</CTA>
                </OrderOne>
                <OrderTwo>
                    <Img src={TheNestLogo} alt="The Nest Logo"></Img>
                </OrderTwo>
            </ParentContainer>
        </MainContainer>
    );
}

export default connect(Hero);

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: black;
`;
const ParentContainer = styled.div`
width: 90%;
max-width: 1200px;
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

const OrderOne = styled.div`
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

const OrderTwo = styled.div`
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

const Title = styled.h1`
font-size: 32px;
font-weight: 600;
color: white;
line-height: 1.5;
margin-bottom: 35px;
${mq[0]} {
    font-size: 28px;
}
`;

const CTA = styled.a`
text-decoration: none;
font-size: 24px;
font-weight: 600;
padding: 10px 50px;
border-radius: 15px;
background-color: white;
color: black;
width: fit-content;
&:hover,
&:focus {
  background-color: #FFA8A8;
}
`;

const Img = styled.img`
width: inherit;
  `;