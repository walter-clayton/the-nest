import { useState, useEffect } from "react";
import { connect, styled, css } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import BlackBeigeRectangle from "../../../../static/images/black-beige-rectangle.svg";
import BeigeBrownRectangle from "../../../../static/images/beige-brown-rectangle.svg";
import BrownBeigeRectangle from "../../../../static/images/brown-beige-rectangle.svg";
import CremeBrule from "../../../../static/images/creme-brule.jpeg";
import Review from "../components/review";
import data from "../../../../static/data/reviews.json";

const Section = ({ state }) => {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  
  const handlePrevReview = () => {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  };
  
  const handleNextReview = () => {
    setIndex((index + 1) % reviews.length);
  };
  
  const menu = state.source.attachment[35];
  
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const galleryPage = state.source.post[42];
    const pageContent = galleryPage && galleryPage.content.rendered;
    const regex = /<img[^>]+src="([^">]+)"/g;
    const matches = pageContent && pageContent.match(regex)?.map((match) => match.match(/src="([^">]+)"/)[1]);

    setGalleryImages(matches || []);

  }, [state.source.post]);

  const handlePrevGallery = () => {
    setGalleryIndex(galleryIndex - 1 < 0 ? galleryImages.length - 1 : galleryIndex - 1);
  };

  const handleNextGallery = () => {
    setGalleryIndex((galleryIndex + 1) % galleryImages.length);
  };

  return (
    <>
      <SectionImg src={BlackBeigeRectangle} />
      <MainContainer>
      <Title>STORY</Title>
        <ParentContainer>
          <OrderTwo>
            <ImgContainer>
              <Img src={CremeBrule} css={css({ border: '10px solid #6F4E37', height:'auto' })} alt="Creme Brule" />
            </ImgContainer>
          </OrderTwo>
          <OrderOne>
            <Title>Serving you coffee since 2018</Title>
            <CTA href="#story">Read More</CTA>
          </OrderOne>
        </ParentContainer>
      </MainContainer>
      <SectionImg src={BeigeBrownRectangle} />
      <MainContainer className="brown-background">
      <Title className="white-title">MENU</Title>
        <ParentContainer>
          <OrderOne>
            <Title className="white-title">Hot, cold, food and drinks...</Title>
            <CTA className="download" target="_blank" href={menu.source_url} download>Download</CTA>
          </OrderOne>
          <OrderTwo>
            <Img
              css={css({ border: '10px solid #EFDECD' })}
              alt={menu.title.rendered}
              src={menu.source_url}
              id={menu.featured_media}
            />
          </OrderTwo>
        </ParentContainer>
        </MainContainer>
      <SectionImg src={BrownBeigeRectangle} />
      <MainContainer className="section-three">
      <Title>REVIEWS</Title>
        {/* Review Section */}
        <ContainerParent>
          <button type="button" onClick={handlePrevReview} css={css`text-decoration: none; border: none; background: none;}`}>
            <FontAwesomeIcon icon={faChevronLeft} size="5x" css={css`color: #A67B5B;:hover{color: #F18888;}`}/>
          </button>
          <ContainerReview>
            {review && (
              <>
                <Review key={`review-${index}`} {...review} reviewIndex={index} index={index} />
                <ButtonContainer>
                  <NavigationDots
                    items={reviews}
                    currentIndex={index}
                    setCurrentIndex={setIndex}
                  />
                </ButtonContainer>
              </>
            )}
          </ContainerReview>
          <button type="button" onClick={handleNextReview} css={css`text-decoration: none; border: none; background: none;}`}>
            <FontAwesomeIcon icon={faChevronRight} size="5x" css={css`color: #A67B5B;:hover{color: #F18888;}`}/>
          </button>
        </ContainerParent>
      </MainContainer>
      <SectionImg src={BeigeBrownRectangle} />
      <MainContainer className="brown-background">
        {/* Gallery Section */}
        <Title className="white-title">GALLERY</Title>
        <ContainerParent>
          <button type="button" onClick={handlePrevGallery} css={css`text-decoration: none; border: none; background: none;}`}>
            <FontAwesomeIcon icon={faChevronLeft} size="5x" css={css`color: white;:hover{color: #F18888;}`}/>
          </button>
          <ContainerReview>
              <>
                <GalleryImage alt={galleryImages[galleryIndex]} src={galleryImages[galleryIndex]} key={`gallery-${galleryIndex}`} />
                <ButtonContainer>
                  <NavigationDots
                    items={galleryImages}
                    currentIndex={galleryIndex}
                    setCurrentIndex={setGalleryIndex}
                  />
                </ButtonContainer>
              </>
          </ContainerReview>
          <button type="button" onClick={handleNextGallery} css={css`text-decoration: none; border: none; background: none;}`}>
            <FontAwesomeIcon icon={faChevronRight} size="5x" css={css`color: white;:hover{color: #F18888;}`}/>
          </button>
        </ContainerParent>
      </MainContainer>
    </>
  );
};
const NavigationDots = ({ items, currentIndex, setCurrentIndex }) => {
const handleClick = (index) => {
setCurrentIndex(index);
};

return (
<DotContainer>
{items.map((_, index) => (
<Dot
key={`dot-${index}`}
active={currentIndex === index}
onClick={() => handleClick(index)}
/>
))}
</DotContainer>
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

const Title = styled.h2`font-size: 38px; font-weight: 700; color: #6f4e37; margin-bottom: 2rem; ${mq[2]} { font-size: 2rem; margin-bottom: 2rem; } &.white-title { color: #ffffff; }`;

const CTA = styled.a`margin-top: 100px !important; width: fit-content; text-decoration: none; background-color: #f18888; color: #ffffff; padding: 1rem 2rem; font-size: 1.5rem; font-weight: 600; border-radius: 15px; transition: background-color 0.3s ease; &:hover { background-color: #c45f5f; } &.download { background-color: #efdecd; color: #6f4e37; &:hover { background-color: #d7c2b3; } }`;

const ImgContainer = styled.div`max-width: 100%; overflow: hidden; border-radius: 15px;`;

const Img = styled.img`width: 100%; height: auto; border-radius: 15px`;

const SectionImg = styled.img`width: 100%; height: auto;`;

const ContainerParent = styled.div`width: 90%; max-width: 1200px; margin: 5% auto; display: flex;flex-direction: row; justify-content: space-between; align-items: center; ${mq[2]} { flex-direction: row; }`;

const ContainerReview = styled.div`flex-basis: 75%; display: flex; flex-direction: column; align-items: center; justify-content: center; ${mq[2]} { flex-basis: 100%; }`;

const ButtonContainer = styled.div`display:flex; justify-content: center; align-items: center; margin-top: 2rem;`;

const GalleryImage = styled.img`width: 100%; max-height: 400px; object-fit: cover; border-radius: 5px;`;

const DotContainer = styled.div`display: flex; justify-content: center; margin-top: 1rem;`;

const Dot = styled.span`width: 10px; height: 10px; border-radius: 50%; background-color: ${(props) => (props.active ? "#f18888" : "#ccc")}; margin: 0 5px; cursor: pointer;`;

export default connect(Section);