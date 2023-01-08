import { styled } from "frontity";
import Image from "@frontity/components/image";
import { BsFacebook } from 'react-icons/bs';

function subHeader() {
  return (
    <>
    <SubHeaderBg>
      <SubHeaderContainer>
      <nav>
        <ul>
          <li><a href="#">O Projeto</a></li>
          <li><a href="#">Parcerias</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Politicas de privacidade</a></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><a href="#">
  
          </a></li>
          <li><a href="#">Politicas de privacidade</a></li>  
        </ul>
      </nav>
      </SubHeaderContainer>
    </SubHeaderBg> 
    </>
  )
}

export default subHeader;

const SubHeaderBg = styled.div`
  background: #0C3B4A;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
`

const SubHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 848px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: #fff;

  & nav ul {
    margin: 0;
    list-style: none;
    display: flex;
    padding: 10px;
  }
  & ul li a {
    padding: 10px;
  }
`