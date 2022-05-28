import React from "react";
import { toast } from "react-toastify";

const ManageOrderRow = ({ items, index, refetch }) => {
  const { _id, name, email, product, totalPrice, quantity, status } = items;

  const handleDeliver = () => {
    fetch(`http://localhost:5000/deliver/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authoraization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Product delivered successful", {
            autoClose: 1000,
            position: "top-center",
          });
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>
        <p>{name}</p>
        <p>{email}</p>
      </td>
      <td>
        <p>{quantity} piece</p>
        <p>Total Price : {totalPrice}</p>
      </td>
      <td>
        {status === "delivered" ? (
          <p className="text-md text-success">Product was delivered</p>
        ) : (
          <>
            <button onClick={handleDeliver} className="btn btn-xs btn-success">
              Delivery
            </button>
            <button className="btn btn-xs btn-warning ml-2">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
