import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://dry-reaches-86494.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto py-14">
      <div className="mb-14">
        <h2 className="text-center text-5xl font-bold uppercase text-accent mb-5">
          testimonial
        </h2>
        <h2 className="text-center text-2xl font-bold uppercase">
          What says people about us
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
