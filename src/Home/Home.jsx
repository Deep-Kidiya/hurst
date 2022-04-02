import React from "react";
import Header from "../Components/Header/Header";
import HeaderCards from "../Components/Header/HeaderCards";
import Products from "../Components/Products/Products";
import Online from "../Components/Online/Online";
import Blog from "../Components/Blog/Blog";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderCards />
      <Products />
      <Online />
      <Blog />
    </>
  );
};

export default Home;
