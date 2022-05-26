import React from "react";

const Banner = () => {
  return (
    <div className='bg-[url("https://i.ibb.co/vh0WP71/realistic-microchip-processor-background-23-2148881318.webp")] bg-cover bg-no-repeat bg-center scroll-smooth'>
      <div className="bg-opacity-40 hero-overlay h-full">
        <div className="container mx-auto py-40 text-center text-white">
          <h2 className="font-bold uppercase text-2xl ">we are tech house .</h2>
          <h2 className="font-bold uppercase text-4xl my-5">
            collect your necessary computer component
          </h2>
          <a
            href="#services"
            className="btn btn-info btn-outline uppercase mt-36 animate__animated animate__backInUp"
          >
            explore us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
