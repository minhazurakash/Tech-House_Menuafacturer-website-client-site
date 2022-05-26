import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("products.json").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div id="services" className="container mx-auto my-10 scroll-smooth">
      <div className="text-center py-10">
        <h2 className="text-4xl uppercase font-bold text-accent">
          we have only original product
        </h2>
        <h3 className="text-lg mt-3 capitalize font-bold">
          now pick a item which one do you need
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} items={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
