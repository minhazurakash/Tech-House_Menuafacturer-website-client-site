import React from "react";

const ManageProductRow = ({ items, index }) => {
  const { product, price, available_quantity } = items;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>{price}</td>
      <td>{available_quantity} piece</td>
      <td>
        <button className="btn btn-xs btn-warning ml-2">Delete</button>
      </td>
    </tr>
  );
};

export default ManageProductRow;
