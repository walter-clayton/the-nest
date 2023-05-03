import { connect, styled } from "frontity";
import BlackBeigeRectangle from "../../../../static/images/black-beige-rectangle.svg";
import CremeBrule from "../../../../static/images/creme-brule.jpeg";

const Section = () => {
    return (
        <>
        <SectionImg src={BlackBeigeRectangle} alt="The Nest Logo"></SectionImg>
        <MainContainer>
            <ParentContainer>
                <OrderTwo>
                <ImgContainer>
                    <Img src={CremeBrule} alt="The Nest Logo"></Img>
                </ImgContainer>
                </OrderTwo>
                <OrderOne>
                    <Title>Serving you coffee since 2018 </Title>
                    <CTA href="#story">Our Story</CTA>
                </OrderOne>
            </ParentContainer>
        </MainContainer>
        </>
    );
}

export default connect(Section);

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #EFDECD;
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

const Title = styled.h2`
font-size: 28px;
font-weight: 600;
color: black;
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
background-color: #A67B5B;
color: white;
width: fit-content;
&:hover,
&:focus {
  background-color: #FFA8A8;
  color: black;
}
`;

const Img = styled.img`
border-radius: 15px;
max-width: 100%;
height: auto;
  `;

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
width: 500px;
border-radius: 25px;
margin: auto;
background-color: white;
color: black;
${mq[3]} {
  width: 400px;
}
${mq[2]} {
  width: 350px;
}
${mq[1]} {
  width: auto;
}
`;

const SectionImg = styled.img`
width: 100%;
margin-top: -10px;
margin-bottom: -10px;
  `;