import React from "react";

const Discount = () => {
  return (
    <div class=" py-28">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl uppercase mb-10 text-center font-bold text-accent">
          Would you like to grab a discount?
        </h2>
        <div class="hero-content flex-col lg:flex-row gap-10">
          <img
            src="https://i.ibb.co/ZKspQC9/discount.png"
            class="max-w-sm rounded-lg "
            alt="images"
          />
          <div>
            <h1 class="text-5xl font-bold">Deal Of The Day!</h1>
            <p class="py-6 text-accent text-2xl">Save Up to 60% Off!</p>
            <button class="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
