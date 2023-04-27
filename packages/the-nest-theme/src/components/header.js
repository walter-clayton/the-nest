import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import TheNestLogo from "../../../../static/images/thenest-logo.jpg";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Logo src={TheNestLogo} alt="The Nest Logo"></Logo>
        </StyledLink>
        <MobileMenu />
        <Nav />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const Container = styled.div`
  background-color: black;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-color: ${(props) => (props.isPostType ? "lightseagreen" : "maroon")};
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};
  ${mq[0]} {
    flex-direction: column;
  }
  `;

const Logo = styled.img`
  width: 70px;
  height: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
