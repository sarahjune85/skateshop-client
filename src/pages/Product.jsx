import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactModal from "react-modal";

const Container = styled.div`
  position: absolute;
`;

const ProductWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  border-radius: 20px;
  padding: 50px;
  align-items: center;
  display: flex;
  box-shadow: 2px 1px 15px -3px rgba(122, 10, 10, 0.308);
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  min-width: 100px;
  align-items: center;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  color: pink;
  font-size: xx-large;
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  ${mobile({ fontSize: "16px" })}
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
  ${mobile({ width: "100%" })}
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
  font-size: 15px;
  font-weight: 200;
  margin: 10px;
`;

const FilterColor = styled.div`
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 15px;
`;

const FilterSizeOption = styled.option`
  font-size: 15px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  margin: 30px 0px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
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

const AddToCartButton = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  background-color: #fff88fc5;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #ff90a3b7;
    color: #442d2d;
  }
`;

const BackButton = styled.button`
  padding: 10px 20px;
  margin-right: 30px;
  font-size: 15px;
  border-radius: 5px;
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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        // console.log(res.data);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    alert(`${quantity} ${product.title} added to cart`);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <ProductWrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>

          <FilteredContainer>
            <ColorSelector>
              <FilterTitle>Color: </FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </ColorSelector>
            <SizeSelector>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </SizeSelector>
          </FilteredContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} style={{ cursor: "pointer" }} />
            </AmountContainer>
          </AddContainer>
          <BackButton type="button" onClick={() => history.goBack()}>
            Back to Product List
          </BackButton>
          <AddToCartButton onClick={handleClick}>Add To Cart</AddToCartButton>
        </InfoContainer>
      </ProductWrapper>

      <Footer />
    </Container>
  );
};

export default Product;
