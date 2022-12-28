import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyOrderRow = ({ order, index, refetch }) => {
  const cancelOrder = () => {
    fetch(
      `https://techhouse-server-production.up.railway.app/myorder/${order._id}`,
      {
        method: "DELETE",
        headers: {
          authoraization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Delete Success", {
            autoClose: 1000,
            position: "top-center",
          });
        }
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.product}</td>
      <td>
        {order.status === "delivered" ? (
          <p className="text-secondary">{order.status}</p>
        ) : (
          <p className="text-green-500">{order.status}</p>
        )}
      </td>
      <td>
        <p>{order.quantity} piece</p>
        <p>Total Price : {order.totalPrice}</p>
      </td>
      <td>
        {order.status !== "delivered" && (
          <button onClick={cancelOrder} className="btn btn-xs btn-warning mr-2">
            Cancel
          </button>
        )}
        <Link to={`/payment/${order._id}`}>
          <button className="btn btn-xs btn-success">Make Payment</button>
        </Link>
      </td>
    </tr>
  );
};

export default MyOrderRow;
