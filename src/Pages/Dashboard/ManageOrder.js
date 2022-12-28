import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrderRow from "./ManageOrderRow";
import OrderDeleteModal from "./OrderDeleteModal";

const ManageOrder = () => {
  const [modalData, setModalData] = useState({});

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch("https://techhouse-server-production.up.railway.app/orders").then(
      (res) => res.json()
    )
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
              {products &&
                products?.map((product, index) => (
                  <ManageOrderRow
                    key={product._id}
                    items={product}
                    index={index}
                    refetch={refetch}
                    setModalData={setModalData}
                  ></ManageOrderRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalData && (
        <OrderDeleteModal
          modalData={modalData}
          setModalData={setModalData}
          refetch={refetch}
        ></OrderDeleteModal>
      )}
    </div>
  );
};

export default ManageOrder;
