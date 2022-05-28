import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const { data: order, refetch, isLoading } = useQuery("product");
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-bold my-5">
        This is Payment for {id}
      </h2>
    </div>
  );
};

export default Payment;
