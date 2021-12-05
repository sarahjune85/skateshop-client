import {
  Facebook,
  Instagram,
  MailOutlined,
  PhoneOutlined,
  Pinterest,
  RoomOutlined,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #ffdfc373;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 200px;
  margin: 20px 30px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  margin: 5px;
`;

const Center = styled.div`
  flex: 1;
  height: auto;
  padding: 20px;
  font-size: small;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 15px;
  margin-top: 30px;
  color: #ff90a2;
  font-size: 1.4rem;
  font-weight: 700;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  font-size: small;
  ${mobile({ backgroundColor: "#cefcffb0" })}
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to="/">
          <Logo src="/images/GNRC.png" />
        </Link>
        <SocialContainer>
          <SocialIcon color="ff90a2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="ff90a2">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="ff90a2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="ff90a2">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Site Directory</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Skates</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Parts</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Apparel</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomOutlined style={{ marginRight: "10px" }} /> 123 Roller St, Boogietown 34567
        </ContactItem>
        <ContactItem>
          <PhoneOutlined style={{ marginRight: "10px" }} /> +61 234 567 890
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: "10px" }} /> contact@gnrc.skates
        </ContactItem>
        <Payment src="https://i.imgur.com/rC4b0xf.png" />
      </Right>
    </Container>
  );
};

export default Footer;
