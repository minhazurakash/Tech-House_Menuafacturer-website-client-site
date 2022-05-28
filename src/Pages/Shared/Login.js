import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import GoogleSignIn from "./GoogleSignIn";
import Loading from "./Loading";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (loginError) {
      toast.error(loginError.code.split("/")[1], {
        autoClose: 1000,
        position: "top-center",
      });
    }
    if (user) {
      navigate(from, { replace: true });
    }
  }, [loginError, user]);

  if (loading || loginLoading) {
    return <Loading></Loading>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="bg-base-200">
      <div class=" items-center container mx-auto">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center hidden lg:block ">
            <img src="https://i.ibb.co/6FzF1gW/login.png" alt="" />
          </div>
          <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 class="text-4xl mb-5 font-bold text-center">Login now!</h1>
              <form onSubmit={handleLogin} className="grid gap-4">
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
                <Link to="/reset">Forgot password?</Link>
                <input
                  type="submit"
                  class="btn btn-bordered btn-accent w-full"
                  value="Login"
                />
              </form>
              <p>
                New to Tech House?
                <Link to="/signup" className="text-blue-500">
                  {" "}
                  Signup
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

export default Login;
