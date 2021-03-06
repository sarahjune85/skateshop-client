import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ff90a39c;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  min-width: fit-content;
  font-size: 0.8rem;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid grey")};
  background-color: ${(props) => (props.type === "filled" ? "#ff90a3b7" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ width: "45%", height: "60px" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 1.4rem;
  margin: 5px;
  color: #3d3d3da0;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 1.8rem;
  color: #3d3d3d;
  ${mobile({ marginBottom: "20px" })};
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #d3d3d3a0;
  border-radius: 10px;
  padding: 15px;
  height: fit-content;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  font-family: "Carter One", cursive;
  letter-spacing: 3px;
  width: 100%;
  color: white;
  padding: 15px;
  font-size: 22px;
  border-radius: 10px;
  border: none;
  background-color: #ff90a3b7;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: #fff88fc5;
    color: #442d2d;
  }
`;

const ClearCartButton = styled.button`
  width: 20%;
  color: white;
  padding: 15px;
  font-size: 22px;
  border-radius: 10px;
  border: none;
  background-color: #ff90a3b7;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: #fff88fc5;
    color: #442d2d;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    // if stripeToken exist, call makeRequest:
    stripeToken && makeRequest();
  }, [stripeToken, cart, history]);

  // // reducer
  // const clearCart = () => {
  //   dispatch(clearCart(cart));
  // };

  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to="/">
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag ({cart.products.length})</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          {/* <ClearCartButton onClick={clearCart}>Clear cart</ClearCartButton> */}
          <StripeCheckout
            name="GNRC Skates"
            image="/images/skate-logo.png"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">Checkout Now</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Item: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>${product.price * product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount:</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="GNRC Skates"
              image="/images/skate-logo.png"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
