import React from "react";

const Newslater = () => {
  return (
    <div className='bg-[url("https://i.ibb.co/Yj0vmZQ/00t-LYTqwmg-Fvac-Zl-YPc5ec-O-8.webp")] bg-center bg-no-repeat'>
      <div className="bg-black/70 py-36">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 text-center items-center gap-10 text-white">
          <div>
            <h4 className="text-md mb-3">
              LATEST NEWS AND DEALS DIRECTLY TO YOUR INBOX
            </h4>
            <h2 className="text-4xl font-bold">Subscribe Our Newslater</h2>
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              class="input input-bordered text-black rounded-none rounded-bl-md rounded-tl-md input-accent w-full max-w-xs"
            />
            <button className="btn btn-accent uppercase rounded-none  rounded-br-md rounded-tr-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
