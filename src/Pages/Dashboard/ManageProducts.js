import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ManageProductRow from "./ManageProductRow";

const ManageProducts = () => {
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        authoraization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status == 401 || res.status == 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
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
