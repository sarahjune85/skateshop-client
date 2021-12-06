import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiUtils";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://media.vogue.co.uk/photos/5f35103e3771316bf98bb858/master/w_1920,h_1280,c_limit/Playtone-108.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
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
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  // const history = useHistory();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const usernameRef = useRef();

  // const handleStart = () => {
  //   setEmail(emailRef.current.value);
  // };

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  // const handleFinish = async (e) => {
  //   e.preventDefault();
  //   setPassword(passwordRef.current.value);
  //   setUsername(usernameRef.current.value);
  //   try {
  //     await axios.post("auth/register", { email, username, password });
  //     history.push("/login");
  //   } catch (err) {}
  // };

  return (
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input placeholder="Confirm Password" type="confirmPassword" /> */}
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
  );
};

export default Register;
