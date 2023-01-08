import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import LogoImg from "../assets/logo.png";
import Image from "@frontity/components/image";
const Header = ({ state }) => {
  return (
    <>
      <Container>
        <subHeader>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
            </ul>
          </nav>
        </subHeader>
        <StyledLink link="/">
        <Logo 
          src={LogoImg}
          width="120px"
          height="100%"
         />
        </StyledLink>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Logo = styled(Image)`
  max-width: 100%;
  display: block;
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 848px;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const subHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #0C3B4A;
  width: 100%;
  height: 80px;
`