import { async } from "@firebase/util";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import GoogleSignIn from "./GoogleSignIn";
import Loading from "./Loading";

const Signup = () => {
  const [user, loading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, passUser, passLoading, PassError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  // display error or success message
  useEffect(() => {
    if (PassError) {
      toast.error(PassError.code.split("/")[1], {
        autoClose: 1000,
        position: "top-center",
      });
    }
    if (user) {
      toast.success("Successfully create a accaount", {
        autoClose: 1000,
        position: "top-center",
      });
      navigate("/");
    }
  }, [PassError, user]);
  if (loading || passLoading) {
    return <Loading></Loading>;
  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // create user
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className="bg-base-200">
      <div class="  container mx-auto">
        <div class="hero-content flex-col lg:flex-row-reverse justify-start">
          <div class="text-center hidden lg:block ">
            <img src="https://i.ibb.co/6FzF1gW/login.png" alt="" />
          </div>
          <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 class="text-4xl mb-5 font-bold text-center">
                Create accaount!
              </h1>
              <form onSubmit={handleSignIn} className="grid gap-4">
                <div>
                  <label className="lebel-text label">Name</label>
                  <input
                    name="name"
                    type="name"
                    placeholder="Enter your name"
                    class="input input-bordered input-accent w-full bg-transparent"
                    required
                  />
                </div>
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
                <div>
                  <label className="lebel-text label">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    class="input input-bordered input-accent w-full bg-transparent"
                    required
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-bordered btn-accent w-full"
                  value="Signup"
                />
              </form>
              <p>
                Already have an accaount?
                <Link to="/login" className="text-blue-500">
                  {" "}
                  Login
                </Link>
              </p>
              <div class="divider">OR</div>
              <GoogleSignIn></GoogleSignIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
