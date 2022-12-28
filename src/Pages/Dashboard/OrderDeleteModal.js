import React from "react";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ modalData, setModalData, refetch }) => {
  const handleDelete = () => {
    fetch(
      `https://techhouse-server-production.up.railway.app/order/${modalData._id}`,
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
          refetch();
          setModalData(false);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle bg-transparent">
        <div class="modal-box bg-accent">
          <label
            for="my-modal-2"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Are you sure? </h3>
          <p class="py-4">
            If you once delete it then you never can be restored again.
          </p>
          <div class="modal-action">
            <button onClick={handleDelete} className="btn btn-warning">
              confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
