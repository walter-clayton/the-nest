import {useState, useEffect} from 'react';
import { styled, css } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({id, author, image, source, link, review, reviewIndex, index}) => {

    let position = "nextSlide";
    if(reviewIndex === index){
       position = 'activeSlide'
      }
    if(reviewIndex === index - 1 || (index === 0 && reviewIndex === review.length - 1)){
       position = 'lastSlide'
      }
     return(
         <Container className={position} key={id}>
            <OrderOne>
               {Array.from({ length: 5 }).map((_, index) => (
                   <StyledFontAwesomeIcon
                       key={`star-${index}`}
                       icon={faStar}
                   />
               ))}
               <ReviewText>"{review}"</ReviewText>
                { image && (
                    <ImageAvatar height="128" width="128" src={image} alt={author} />
                    )}
               <Author href={link} target="_blank">{author}</Author>
                <CTA>{source}</CTA>
            </OrderOne>
         </Container>
        );
       }

       export default Review;

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
font-size: 45px; 
color: #F18888; 
marginBottom: 25px;
${mq[2]} {
font-size: 35px; 
}
${mq[1]} {
font-size: 25px; 
}
`;

const ImageAvatar = styled.img`
line-height: 0;		/* remove line-height */ 
display: inline-block;	/* circle wraps image */
margin: 5px;
border: 4px solid rgba(200,200,200,0.4);
border-radius: 50%;	/* relative value */
/*box-shadow: 0px 0px 5px rgba(0,0,0,0.4);*/
transition: linear 0.25s;
height: 250px;
width: 250px;
`;
const Container = styled.div`
display: flex;
flex-direction: row;
text-align: center;
${mq[2]} {
flex-direction: column;
}
`;

const OrderOne = styled.div`
align-items: center;
flex-direction: column;
margin: auto;
width: 90%;
padding: 30px 0 30px 0;
${mq[2]} {
  width: 80%;
  text-align: center;
}
`;

const Author = styled.a`
text-decoration: none; 
display: flex;
justify-content: center;
font-size: 20px;
line-height: 1.5;
font-weight: 600;
margin: 25px 0px;
color: #F18888;
${mq[2]} {
    font-size: 18px;
    margin: 10px 0px;
    }
    ${mq[1]} {
    font-size: 16px;
    margin: 10px 0px;
    }
`;

const ReviewText = styled.p`
font-size: 24px;
line-height: 1.5;
font-weight: 600;
margin-bottom: 25px;
margin-top: 50px;
${mq[2]} {
    font-size: 18px; 
    }
    ${mq[1]} {
    font-size: 16px; 
    }
`;

const CTA = styled.p`
 text-decoration: none; 
 color: black;
 font-style: italic;
 font-size: 20px;
 margin: 15px 0px;
 ${mq[2]} {
    font-size: 18px;
    }
    ${mq[1]} {
    font-size: 16px;
    }
`;