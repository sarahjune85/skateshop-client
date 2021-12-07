import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { clearCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 90px;
  background-color: #ffd5dc;
  ${mobile({ height: "90px", width: "100vw" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: contents;
`;

const Logo = styled.img`
  height: 70px;
  ${mobile({ height: "50px", width: "200px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: "center",
    marginRight: "10px",
    flexDirection: "column",
    marginLeft: "10px",
    lineHeight: "25px",
    alignItems: "flex-end",
  })}
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #ff5a78;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: #372e6b9e;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  // reducer
  const handleLogout = () => {
    dispatch(logout(user));
    dispatch(clearCart(cart));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="/images/GNRC-wide.png" />
          </Link>
        </Left>
        <Center>
          <MenuItem to="/products/skates">SKATES</MenuItem>
          <MenuItem to="/products/parts">PARTS</MenuItem>
          <MenuItem to="/products/apparel">APPAREL</MenuItem>
        </Center>
        <Right>
          {user ? <span>{""}</span> : <MenuItem to="/register">REGISTER</MenuItem>}

          {user ? (
            <span
              onClick={handleLogout}
              style={{
                color: "#ff5a78",
                fontSize: 20,
                padding: "5px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              LOGOUT{" "}
              {user.others.username.charAt(0).toUpperCase() +
                user.others.username.slice(1)}
            </span>
          ) : (
            <MenuItem to="/login">LOGIN</MenuItem>
          )}

          <MenuItem to="/cart">
            <Badge color="secondary" badgeContent={quantity}>
              <ShoppingCartOutlined
                style={{
                  fontSize: 28,
                }}
              />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
