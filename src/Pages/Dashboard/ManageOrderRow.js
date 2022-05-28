import React from "react";

const ManageOrderRow = ({ items, index }) => {
  const { name, email, product, totalPrice, quantity } = items;
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
        <button className="btn btn-xs btn-success">Delivery</button>
        <button className="btn btn-xs btn-warning ml-2">Delete</button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
