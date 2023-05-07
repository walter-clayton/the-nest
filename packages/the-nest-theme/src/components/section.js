import {useState} from "react";
import { connect, styled, css } from "frontity";
import BlackBeigeRectangle from "../../../../static/images/black-beige-rectangle.svg";
import BeigeBrownRectangle from "../../../../static/images/beige-brown-rectangle.svg";
import BrownBeigeRectangle from "../../../../static/images/brown-beige-rectangle.svg";
import CremeBrule from "../../../../static/images/creme-brule.jpeg";
import Review from "../components/review";
import data from "../../../../static/data/reviews.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Section = ({ state }) => {
    const [reviews, setReviews] = useState(data);
    const [index, setIndex] = useState(0);
    const [reviewIndex, setReviewIndex] = useState(0);
    const review = reviews[index];
    
    const NavigationDots = ({ reviews, currentIndex, setCurrentIndex }) => {
        const handleClick = (index) => {
          setCurrentIndex(index);
        };
      
        return (
          <DotContainer>
            {reviews.map((_, index) => (
              <Dot
                key={`dot-${index}`}
                active={currentIndex === index}
                onClick={() => handleClick(index)}
                />
                ))}
                </DotContainer>
                );
    };

    const handlePrev = () => {
      setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
      setReviewIndex(reviewIndex - 1 < 0 ? reviews.length - 1 : reviewIndex - 1);
    };
    
    const handleNext = () => {
      setIndex((index + 1) % reviews.length);
      setReviewIndex((reviewIndex + 1) % reviews.length);
    };
    const menu = state.source.attachment[35]
    return (
        <>
        <SectionImg src={BlackBeigeRectangle}></SectionImg>
        <MainContainer>
            <ParentContainer>
                <OrderTwo>
                <ImgContainer>
                    <Img src={CremeBrule} css={css({ border: '10px solid #6F4E37' })} alt="Creme Brule"></Img>
                </ImgContainer>
                </OrderTwo>
                <OrderOne>
                    <Title>Serving you coffee since 2018 </Title>
                    <CTA href="#story">Our Story</CTA>
                </OrderOne>
            </ParentContainer>
        </MainContainer>
        <SectionImg src={BeigeBrownRectangle}></SectionImg>
        <MainContainer className="section-two">
            <ParentContainer>
                <OrderOne>
                    <Title className="menu">Our Delightful Menu</Title>
                    <CTA className="download" target="_blank" href={menu.source_url} download>Download</CTA>
                </OrderOne>
                <OrderTwo>
                    <Img
                    css={css({ border: '10px solid #EFDECD' })}
                    alt={menu.title.rendered}
                    src={menu.source_url}
                    id={menu.featured_media} />
                </OrderTwo>
            </ParentContainer>
        </MainContainer>
        <SectionImg src={BrownBeigeRectangle}></SectionImg>
        <MainContainer className="section-three">
            <ContainerParentReview>
                <button type="button" onClick={handlePrev} css={css`text-decoration: none; border: none; background: none;}`}>
                <FontAwesomeIcon icon={faChevronLeft} size="5x" css={css`color: #A67B5B;:hover{color: #F18888;}`}/>
                </button>
                <ContainerReview>
                    <Review key={`review-${reviewIndex}`} {...review} reviewIndex={reviewIndex} index={index}></Review>
                    <ButtonContainer>
                    <NavigationDots
                        reviews={reviews}
                        currentIndex={index}
                        setCurrentIndex={setIndex}
                    />
                    </ButtonContainer>  
                </ContainerReview>
                  <button type="button" onClick={handleNext} css={css`text-decoration: none; border: none; background: none;}`}>
                    <FontAwesomeIcon icon={faChevronRight} size="5x" css={css`color: #A67B5B;:hover{color: #F18888;}`}/>
                  </button>
            </ContainerParentReview>
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

&.section-two{
    background-color: #A67B5B;
}
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
&.menu{
    color: white;
}
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
&.download{
    background-color: #EFDECD;
    color: black;
}
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

  const ContainerParentReview = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
  padding: 30px 0 30px 0;
  ${mq[2]} {
  }
`;

const ContainerReview = styled.div`
  padding: 50px;
  ${mq[2]} {
    padding: 0px;
  }
`;

const ButtonContainer = styled.div`
text-align: center; 
`;

const DotContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;

const Dot = styled.div`
width: 10px;
height: 10px;
background-color: ${(props) => (props.active ? "#F18888" : "#A67B5B")};
border-radius: 50%;
margin: 0 5px;
cursor: pointer;
`;