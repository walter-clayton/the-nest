import {useEffect, useState, useRef} from "react";
import Link from "./link";
import { connect, styled } from "frontity"
import dayjs from "dayjs"

const List = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const itemRef = useRef(null);

  const [visiblePosts, setVisiblePosts] = useState(2);
  const postsPerLoad = 2;

  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsPerLoad);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, { threshold: 0.5 }); // Trigger the callback when 50% of the item is visible

    observer.observe(itemRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <ItemsContainer>
      <Items>
        {data.items.slice(0, visiblePosts).map((item) => {
          const post = state.source[item.type][item.id]
          const date = new Date(post.date);
          const formattedDate = dayjs(date).format("DD MMMM YYYY");
          const news = post["categories"].includes(8)
          if (news) {
            return (
              <Card ref={itemRef} key={item.id}>
                <CardContent>
                  <CardTitle>{post.title.rendered}</CardTitle>
                  <PostDate>{formattedDate}</PostDate>
                  <Excerpt>
                    <Html2React html={post.excerpt.rendered} />
                  </Excerpt>
                </CardContent>
                <CTA>
                  <Link key={item.id} link={item.link}>
                    Read more
                  </Link>
                </CTA>
              </Card>
            );
          }
          return null;
        })}
      </Items>
      {visiblePosts < data.items.length && (
      <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
    )}
    </ItemsContainer>
  )
}

export default connect(List)

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const ItemsContainer = styled.div`
max-width: 1500px;
margin: auto;
`;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${mq[1]} {
      flex-direction: column;
    }
`;
const Card = styled.div`
flex-direction: column;
justify-content: space-between;
flex: 1 40%;
padding: 2%;
margin: 2%;
background-color: white;
border: 5px;
border-radius: 25px;
display: flex;
`;

const CardContent = styled.div`
`;

const CardTitle = styled.div`
font-size: 28px;
font-weight: 600;
padding: 10px 10px;
`;

const PostDate = styled.div`
font-size: 22px italic;
font-weight: 400;
padding: 10px 10px;
font-style: italic;
`;

const Excerpt = styled.div`
font-size: 22px;
font-weight: 400;
padding: 10px 10px;
`;

const CTA = styled.div`
& > a {
  text-decoration: none;
  color: #f18888;
  font-size: 22px;
  padding: 10px 10px;
  font-weight: 600;
}
`;
const LoadMoreButton = styled.button`
  display: flex;
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  font-size: 22px;
  font-weight: 600;
  border-radius: 15px;
  border: 3px solid black;
  margin: 50px auto;
  cursor: pointer;
  &:hover {
    color: #f18888;
    border-color: #f18888;
  }
`;
