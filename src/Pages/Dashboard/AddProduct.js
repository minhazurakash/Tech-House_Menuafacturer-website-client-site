import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const imageBB = "aa4aaa3a9ccbadaf185b172aaa46e5ff";
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    setLoading(true);
    const {
      available_quantity,
      description,
      minimum_order,
      price,
      product,
      type,
    } = data;
    const photo = data.image[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageBB}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log("success");
          const photoUrl = result.data.url;
          const doc = {
            available_quantity,
            description,
            minimum_order,
            price,
            product,
            type,
            image: photoUrl,
          };
          fetch("https://techhouse-server-production.up.railway.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authoraization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doc),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Product added successful", {
                  autoClose: 1000,
                  position: "top-center",
                });
              }
              reset();
              setLoading(false);
            });
        }
      });
  };
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 class="text-3xl uppercase mb-5 font-bold text-center">
              Add Product!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div>
                <label className="lebel-text label">Product Name</label>
                <input
                  {...register("product")}
                  type="text"
                  placeholder="Your product name"
                  class="input input-bordered input-accent w-full bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="lebel-text label">Prodct Type</label>
                <input
                  {...register("type")}
                  type="text"
                  placeholder="SSD/ RAM /ROM / Graphic Card e.t.c"
                  class="input input-bordered input-accent w-full bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="lebel-text label">Price</label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Product price"
                  class="input input-bordered input-accent w-full bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="lebel-text label">
                  How much this product do you have?
                </label>
                <input
                  {...register("available_quantity")}
                  type="number"
                  placeholder="Your stock"
                  class="input input-bordered input-accent w-full bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="lebel-text label">
                  Set your minimum quantity for sell
                </label>
                <input
                  {...register("minimum_order")}
                  type="number"
                  placeholder="minimum order"
                  class="input input-bordered input-accent w-full bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="lebel-text label">Prodct Picture</label>
                <input
                  {...register("image")}
                  type="file"
                  class="input input-bordered input-accent w-full bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="lebel-text label">
                  Tell about this product
                </label>
                <textarea
                  {...register("description")}
                  type="text"
                  placeholder="type here..."
                  class="textarea textarea-accent h-32 w-full bg-transparent"
                  required
                />
              </div>

              <input
                type="submit"
                class="btn btn-bordered btn-accent w-full"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
