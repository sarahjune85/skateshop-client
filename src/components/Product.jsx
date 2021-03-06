import styled from "styled-components";
import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(237, 200, 252, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  object-fit: scale-down;
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffeea3;
    transform: scale(1.6);
  }
`;

const Title = styled.p`
  position: absolute;
  top: 15px;
  font-weight: 700;
`;

const Price = styled.p`
  position: absolute;
  bottom: 15px;
  font-weight: 700;
  font-size: 20px;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined
              style={{
                color: "#ff5a7886",
                fontSize: 35,
              }}
            />
          </Link>
        </Icon>

        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
      </Info>
    </Container>
  );
};

export default Product;
