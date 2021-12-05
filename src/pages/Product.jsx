import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: scale-down;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilteredContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  flex-direction: column;
`;

const ColorSelector = styled.div`
  display: flex;
  align-items: center;
`;

const SizeSelector = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 22px;
  font-weight: 200;
  margin: 10px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 20px;
`;

const FilterSizeOption = styled.option`
  font-size: 20px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 5px;
`;
const Button = styled.button`
  padding: 15px;
  font-size: 22px;
  border-radius: 10px;
  border: none;
  background-color: #ff90a3b7;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #fff88fc5;
    color: #442d2d;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0036/4950/3321/products/image_0c32b492-12e8-4460-bb0c-854ed12b0a66_2000x.png?v=1619373254" />
        </ImgContainer>
        <InfoContainer>
          <Title>Moxi Lolly</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum blanditiis
            alias nam quam accusamus earum saepe minus. Corporis quo, ipsa delectus
            explicabo consectetur iste iure quia quisquam repellendus officia
            exercitationem?
          </Description>
          <Price>$20</Price>

          <FilteredContainer>
            <ColorSelector>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color="#4ea7ff" />
              <FilterColor color="#ff69b4" />
              <FilterColor color="#663399" />
              <FilterColor color="#ff4500" />
              <FilterColor color="#32cd80" />
            </ColorSelector>
            <SizeSelector>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>4</FilterSizeOption>
                <FilterSizeOption>5</FilterSizeOption>
                <FilterSizeOption>6</FilterSizeOption>
                <FilterSizeOption>7</FilterSizeOption>
                <FilterSizeOption>8</FilterSizeOption>
                <FilterSizeOption>9</FilterSizeOption>
              </FilterSize>
            </SizeSelector>
          </FilteredContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
