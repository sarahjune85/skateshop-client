import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiUtils";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://i.insider.com/5ec57d733f73706a7a587499?width=1136&format=jpeg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #383838b8;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 120px;
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
  &:disabled {
    cursor: not-allowed;
  }
`;

const VisibilityButton = styled.button`
  width: fit-content;
  border: none;
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

const Link = styled.a`
  display: flex;
  margin: 15px 0px;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
  justify-content: center;
  color: #383838b8;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            type="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </Form>
        <VisibilityButton onClick={togglePassword}>Show Password</VisibilityButton>
        <Button onClick={handleClick} disabled={isFetching}>
          LOGIN
        </Button>

        <Link>Forgot your password?</Link>
        <Link>Create a new account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
