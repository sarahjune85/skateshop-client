import styled from "styled-components";
import { mobile, halfScreen } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 90vh;
  position: relative;
  ${halfScreen({ padding: "0px", flexDirection: "column" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh", objectPosition: "left bottom" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff34;
  &:hover {
    background-color: transparent;
  }
`;

const Title = styled.h1`
  font-size: 3.5vw;
  color: white;
  margin-bottom: 20px;
  letter-spacing: 0.4rem;
  ${mobile({ fontSize: "5vw" })}
  ${halfScreen({ padding: "0px", flexDirection: "column", fontSize: "7vw" })}
`;

const Button = styled.button`
  border: none;
  font-weight: bold;
  font-size: 1vw;
  letter-spacing: 0.4rem;
  padding: 15px;
  background-color: #fff6c4a6;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background-color: #fff88fc5;
    color: #ffffff;
  }
  ${mobile({ fontSize: "1rem" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
