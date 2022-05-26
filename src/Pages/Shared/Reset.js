import React from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const handleReset = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="bg-base-200">
      <div class="items-center justify-center container mx-auto">
        <div class="hero-content h-screen items-center gap-48 flex-col lg:flex-row">
          <div class="text-center hidden lg:block ">
            <img
              src="https://i.ibb.co/qWncyyv/login.png"
              className="w-72"
              alt=""
            />
          </div>
          <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
            <div class="card-body">
              <div className="flex justify-between items-center">
                <Link to="/login">
                  <i class="fa-solid fa-arrow-left text-2xl -mt-5 font-bold"></i>
                </Link>
                <h1 class="text-3xl mb-5 font-bold text-center">
                  Reset Your Password!
                </h1>
              </div>
              <form onSubmit={handleReset} className="grid gap-4">
                <div>
                  <label className="lebel-text label">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    class="input input-bordered input-accent w-full bg-transparent"
                    required
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-bordered btn-accent w-full"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
