import React, { setState } from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 90px;
  background-color: #ff90a32e;
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

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({})}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  width: 10rem;
  border: none;
  height: 25px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
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

const MenuItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  // reducer
  const handleLogout = () => {
    dispatch(logout(user));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 20, padding: "5px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo src="/images/GNRC-wide.png" />
          </Link>
        </Center>
        <Right>
          {user ? (
            <span>Hello {user.others.username}!</span>
          ) : (
            <MenuItem>
              <Link to="/register">REGISTER</Link>
            </MenuItem>
          )}
          <MenuItem>
            {user ? (
              <span onClick={handleLogout}>LOGOUT</span>
            ) : (
              <Link to="/login">LOGIN</Link>
            )}
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge color="secondary" badgeContent={quantity}>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
