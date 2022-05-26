import React from "react";

const Summary = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="text-center  text-accent uppercase mb-14">
        <h2 className=" font-bold text-2xl mb-3">
          We reach the hearts of people{" "}
        </h2>
        <p>Learn more about us.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <div class="bg-base-200 p-4 rounded-xl shadow-lg">
          <div class="text-accent mb-5">
            <i class="fa-solid fa-flag text-7xl"></i>
          </div>
          <div class="font-bold text-2xl">Countrys</div>
          <div class="stat-value text-7xl">120+</div>
        </div>

        <div class="bg-base-200 p-4 rounded-xl shadow-lg">
          <div class="text-accent mb-5">
            <i class="fa-solid fa-people-group text-7xl"></i>
          </div>
          <div class="font-bold text-2xl">Happy Client</div>
          <div class="stat-value text-7xl">3,200+</div>
        </div>

        <div class="bg-base-200 p-4 rounded-xl shadow-lg">
          <div class="text-accent mb-5">
            <i class="fa-solid fa-comments text-7xl"></i>
          </div>
          <div class="font-bold text-2xl">Feedbacks</div>
          <div class="stat-value text-7xl">1,200+</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
