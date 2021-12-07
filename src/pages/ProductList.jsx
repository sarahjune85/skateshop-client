import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`
  text-align: -webkit-center;
`;

const Title = styled.h1`
  font-family: "Carter One", cursive;
  font-size: 4.7rem;
  color: #d0c4ff;
  text-shadow: 3px 3px #a17affd3;
  text-align: center;
  margin-top: 2rem;
`;

const FilteredContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  color: #ff90a2;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  opacity: 50%;
  padding: 7px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value.toLowerCase();
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category ? category.toUpperCase() : "All Products"}</Title>
      <FilteredContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Color
            </option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
            <Option>Yellow</Option>
            <Option>Orange</Option>
            <Option>Pink</Option>
            <Option>Cyan</Option>
            <Option>Teal</Option>
            <Option>Black</Option>
          </Select>
          <Select name="size" onChange={handleFilters} defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Size
            </option>
            <Option>OS</Option>
            <Option>5</Option>
            <Option>6</Option>
            <Option>7</Option>
            <Option>8</Option>
            <Option>9</Option>
            <Option>10</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilteredContainer>
      <Products cat={category} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
