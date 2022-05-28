import React from "react";

const ManageProductRow = ({ items, index, setModalData }) => {
  const { product, price, available_quantity } = items;
  const handleModal = () => {
    setModalData(items);
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product}</td>
      <td>{price}</td>
      <td>{available_quantity} piece</td>
      <td>
        <label
          onClick={handleModal}
          for="my-modal-6"
          class="btn btn-xs btn-warning"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageProductRow;
