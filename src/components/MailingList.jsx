import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 35vh;
  background-color: #fcf6f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.img`
  width: 42vw;
  margin-bottom: 50px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 25%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  width: 30%;
`;

const Button = styled.button`
  padding: 0px 24px;
  border: none;
  background-color: #ff90a3b7;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #fff88fc5;
    color: #442d2d;
  }
`;

const MailingList = () => {
  return (
    <Container>
      <Title src="/images/mailing-list.png" />
      <Desc>Sign up to our mailing list for news & special offers!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default MailingList;
