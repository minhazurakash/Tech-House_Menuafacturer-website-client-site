import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrder = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-5">
      <h2 className="text-center font-bold text-3xl uppercase text-accent">
        Mange users order
      </h2>
      <div className="mt-10">
        <div class="overflow-x-auto">
          <table class="table w-full text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Order By</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ManageOrderRow
                  key={product._id}
                  items={product}
                  index={index}
                  refetch={refetch}
                ></ManageOrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
