import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Discount from "./Discount";
import Newslater from "./Newslater";
import Products from "./Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Discount></Discount>
      <Products></Products>
      <Summary></Summary>
      <Newslater></Newslater>
      <Footer></Footer>
    </>
  );
};

export default Home;
