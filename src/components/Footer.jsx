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

const Container = styled.div`
  display: flex;
  background-color: #ffdab973;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
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
  margin-right: 25px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
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
        <Logo>GNRC Skates</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quos dolorum
          dignissimos porro saepe ut necessitatibus consequuntur dolorem reprehenderit,
          dolore explicabo facere voluptatum! Nisi ratione ipsam sapiente odit nulla ab.
        </Desc>
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
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Skates</ListItem>
          <ListItem>Apparel</ListItem>
          <ListItem>Parts</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
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
