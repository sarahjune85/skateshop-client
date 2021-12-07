import { ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile, halfScreen } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: #fff0d1;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffdaf9;
  box-shadow: 3px 3px #888888;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  /* pass a prop to style: */
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  height: 80%;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  padding-left: 2rem;
`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: end;
  padding-right: 7em;
  max-width: 40%;
`;

const SalesBlurb = styled.p`
  font-family: "Carter One", cursive;
  color: #442d2d96;
  margin: 50px 0px;
  font-size: 2em;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  font-family: "Carter One", cursive;
  box-shadow: 3px 3px #888888;
  width: 60%;
  height: 80px;
  margin: 0 auto;
  border: none;
  letter-spacing: 8px;
  background-color: #fff88fc5;
  font-weight: bold;
  color: #ff7a7ad3;
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 10px;
  &:hover {
    background-color: #ff7a7ad3;
    color: white;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const Title = styled.img`
  width: 90%;
  height: 100%;
  object-fit: scale-down;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      {/* props into styled components  */}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftRounded />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* slide item for each element data array: */}
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title src={item.title} />
              <SalesBlurb>{item.desc}</SalesBlurb>
              <Link to={item.link}>
                <Button>SHOP NOW!</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightRounded />
      </Arrow>
    </Container>
  );
};

export default Slider;
