import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ManageProductRow from "./ManageProductRow";
import ProductDeleteModal from "./ProductDeleteModal";

const ManageProducts = () => {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({});
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://dry-reaches-86494.herokuapp.com/products", {
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
                  setModalData={setModalData}
                ></ManageProductRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalData && (
        <ProductDeleteModal
          modalData={modalData}
          setModalData={setModalData}
          refetch={refetch}
        ></ProductDeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;
