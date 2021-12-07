import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ffa4b3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
`;

const Announcement = () => {
  return <Container>Free Shipping With Every Purchase Over $50!</Container>;
};

export default Announcement;
