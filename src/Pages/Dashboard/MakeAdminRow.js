import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ user, index, refetch }) => {
  const handleMakeAdmin = () => {
    fetch(`http://localhost:5000/admin/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authoraization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin made successful", {
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
      <td className="font-bold text-accent">{user.email}</td>
      <td>
        {user.role === "admin" ? (
          <p className="text-success">already an admin</p>
        ) : (
          <button onClick={handleMakeAdmin} className="btn btn-xs">
            make admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
