import React from "react";

const Review = ({ review }) => {
  return (
    <div class="bg-base-200 p-4 rounded-xl shadow-lg hover:bg-base-300 hover:scale-105 transition-all">
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
          <img src={review.image} alt="images" />
        </div>
      </div>
      <div class="font-bold text-2xl">{review.name}</div>
      <div class="text-lg">
        This user gives us {review.rating}{" "}
        <i class="fa-solid fa-star text-sm"></i> review
      </div>
      <div className="mt-3">
        <p>-- {review.review}</p>
      </div>
    </div>
  );
};

export default Review;
