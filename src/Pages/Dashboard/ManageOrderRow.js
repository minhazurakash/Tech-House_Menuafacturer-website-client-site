import React from "react";
import { toast } from "react-toastify";

const ManageOrderRow = ({ items, index, refetch, setModalData }) => {
  const { _id, name, email, product, totalPrice, quantity, status } = items;

  const handleDeliver = () => {
    fetch(`https://techhouse-server-production.up.railway.app/deliver/${_id}`, {
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
  const handleDeleteModal = () => {
    setModalData(items);
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
            <label
              onClick={handleDeleteModal}
              for="my-modal-2"
              class="btn btn-xs btn-warning"
            >
              Delete
            </label>
          </>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
