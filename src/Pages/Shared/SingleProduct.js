import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "./Loading";

const SingleProduct = () => {
  const { _id } = useParams();
  const [user, loading] = useAuthState(auth);
  const [canOrder, setCanOrder] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const navigate = useNavigate();
  const { data: SingleProduct, isLoading } = useQuery("product", () =>
    fetch(`https://dry-reaches-86494.herokuapp.com/product/${_id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const handleMinimumQuntity = (event) => {
    setCanOrder(true);
    setInputValue(event.target.value);
  };
  const handleConfirmOrder = () => {
    const minimumOrder = SingleProduct.minimum_order;
    const availableQuantity = SingleProduct.available_quantity;
    const order = {
      name: user.displayName,
      email: user.email,
      product: SingleProduct.product,
      price: SingleProduct.price,
      quantity: inputValue,
      totalPrice: inputValue * SingleProduct.price,
      status: "pending",
      paid: false,
    };
    if (inputValue < minimumOrder) {
      setCanOrder(false);
      toast.error(`please order Minimum ${minimumOrder} piece`, {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }
    if (availableQuantity < inputValue) {
      setCanOrder(false);
      toast.error(`please order Maximum ${availableQuantity} piece`, {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }
    fetch("https://dry-reaches-86494.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your order is booked", {
            autoClose: 1000,
            position: "top-center",
          });
          navigate("/dashboard/myorder");
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-center gap-7 px-5 md:px-1">
        <div className="px-5 xl:px-20">
          <img src={SingleProduct.image} alt="" className="w-full" />
        </div>
        <div>
          <div>
            <h2 className="text-3xl md:text-2xl uppercase font-bold mb-5 md:mb-2">
              {SingleProduct.product}
            </h2>
            <h4 className="text-xl mb-4 md:mb-2">
              Product Price : {SingleProduct.price}
            </h4>
            <h4 className="text-xl mb-4 md:mb-2">
              Type : {SingleProduct.type}
            </h4>
            <h4 className="text-xl mb-4 md:mb-2">
              Stock : {SingleProduct.available_quantity}{" "}
            </h4>
            <h4 className="text-xl mb-4 md:mb-2">
              Description : {SingleProduct.description}
            </h4>
            <p></p>
            <h3 className="text-2xl font-bold">
              You have to minimum order atleast {SingleProduct.minimum_order}{" "}
              piece.
            </h3>
          </div>
          <div className="flex mt-8 md:mt-3 items-end">
            <div>
              <label className="label"> Quantity :</label>
              <input
                onChange={handleMinimumQuntity}
                type="number"
                className="input input-accent w-24 rounded-none focus:outline-none"
              />
            </div>
            <button
              className="btn btn-accent rounded-none ml-2"
              disabled={!canOrder}
              onClick={handleConfirmOrder}
            >
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
