import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { _id } = useParams();
  return (
    <div>
      <h2 className="text-center text-3xl">This is {_id} number product</h2>
    </div>
  );
};

export default SingleProduct;
