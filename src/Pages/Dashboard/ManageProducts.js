import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageProductRow from "./ManageProductRow";

const ManageProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center uppercase mt-5">
        Manage Your Products
      </h2>
      <div className="mt-10">
        <div class="overflow-x-auto">
          <table class="table w-full text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Available quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ManageProductRow
                  key={product._id}
                  items={product}
                  index={index}
                ></ManageProductRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
