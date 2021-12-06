import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiUtils";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(253, 179, 179, 0.651), rgba(255, 254, 170, 0.5)),
    url("https://media.vogue.co.uk/photos/5f35103e3771316bf98bb858/master/w_1920,h_1280,c_limit/Playtone-108.jpg")
      no-repeat fixed center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Wrapper = styled.div`
  text-align: center;
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 9px 9px 7px -4px rgba(0, 0, 0, 0.1);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.div`
  font-size: 1rem;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ff7a7ad3;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  &:hover {
    background-color: #fff88fc5;
    color: #442d2d;
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      register(dispatch, { username, email, password });
      history.push("/");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input
              placeholder="Username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              // type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form>
          <Agreement>
            By clicking submit, I consent to processing my data in accordance with the{" "}
            <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            SUBMIT
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;
