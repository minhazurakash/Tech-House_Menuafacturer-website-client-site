import React from "react";
import { Link } from "react-router-dom";
import style from "./Product.module.css";

const Product = ({ items }) => {
  const {
    _id,
    type,
    product,
    available_quantity,
    minimum_order,
    price,
    image,
    description,
  } = items;
  return (
    <div class={`card card-compact  bg-base-100 shadow-xl  ${style.box}`}>
      <figure className={`${style.img} transition-all`}>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-2xl">{product}</h2>
        <div className="flex justify-between text-md">
          <span>Type : {type}</span>
          <span>Available Quantity : {available_quantity}</span>
        </div>
        <div className="flex justify-between text-md">
          <span>Price : {price}</span>
          <span>Minimum Order : {minimum_order}</span>
        </div>
        <p className="text-gray-500">Description : {description}</p>
        <div class="card-actions">
          <Link to={`/product/${items._id}`} className="w-full">
            {" "}
            <button class="btn btn-info  w-full mt-5">Order now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
