import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiUtils";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import { useHistory } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://i.insider.com/5ec57d733f73706a7a587499?width=1136&format=jpeg") no-repeat
      fixed center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const SignInBox = styled.div`
  position: absolute;
  top: 25%;
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  box-shadow: 4px 7px 15px -3px rgba(0, 0, 0, 0.1);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-family: "Carter One", cursive;
  font-size: 3rem;
  font-weight: 700;
  color: #fff66d;
  text-shadow: 3px 3px #ff7a7ad3;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  opacity: 50%;
  display: block;
  max-width: 100%;
  position: relative;
  margin-top: 10px;
  height: 40px;
  font-size: 15px;
  margin-bottom: 14px;
  padding: 0 10%;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  margin: 0 auto;
  border: none;
  background-color: #ff7a7ad3;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
  &:hover {
    background-color: #fff88fc5;
    color: #442d2d;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  display: flex;
  margin: 15px 0px;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  color: #383838b8;
  &:hover {
    color: #442d2d;
  }
`;

const Toggle = styled.span`
  i:hover {
    cursor: pointer;
  }
  position: absolute;
  top: 65%;
  right: 1.5rem;
  color: #666;
  z-index: 9999;
  user-select: none;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  // const history = useHistory();

  // Password toggle handler
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <SignInBox>
          <Title>Sign In</Title>
          <Form>
            <Input
              placeholder="Username"
              type="username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder="Password"
              name="password"
              type={passwordShown ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Toggle>
              <i onClick={togglePasswordVisiblity}>
                <VisibilityOutlinedIcon
                  style={{ color: "#ff7a7a87", fontSize: 25, padding: "0px" }}
                />
              </i>
            </Toggle>
          </Form>

          <Button onClick={handleClick} disabled={isFetching}>
            Submit
          </Button>

          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </SignInBox>
      </Container>
    </div>
  );
};

export default Login;
