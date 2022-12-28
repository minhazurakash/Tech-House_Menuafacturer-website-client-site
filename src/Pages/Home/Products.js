import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://techhouse-server-production.up.railway.app/products", {
      method: "GET",
      headers: {
        authoraization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(products);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product key={product._id} items={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
