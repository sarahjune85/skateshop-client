import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MailingList from "../components/MailingList";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const BestSellers = styled.img`
  margin: 20px;
  margin-top: 50px;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Container>
        <Categories />
        <BestSellers src="/images/bestsellers.png" />
        <Products />
      </Container>
      <MailingList />
      <Footer />
    </div>
  );
};

export default Home;
