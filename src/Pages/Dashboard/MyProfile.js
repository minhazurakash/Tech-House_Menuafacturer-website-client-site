import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  return (
    <div className="m-8">
      <h2 className="mb-5 text-accent font-bold uppercase text-4xl">
        my profile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="avatar">
          <div class="w-full rounded-xl">
            <img src="https://api.lorem.space/image/face?hash=64318" alt="" />
          </div>
        </div>
        <div>
          <div>
            <div className="label font-bold text-xl">
              <label>Name</label>
            </div>
            <input
              type="text"
              className="input input-bordered rounded-sm w-full focus:border-0 text-xl"
              value={user?.displayName || "Unknown user"}
              readOnly
            />
          </div>
          <div>
            <div className="label font-bold text-xl">
              <label>Email</label>
            </div>
            <input
              type="email"
              className="input input-bordered rounded-sm w-full focus:border-0 text-xl"
              value={user?.email || "Email not found"}
              readOnly
            />
          </div>
          <div>
            <div className="label font-bold text-xl">
              <label>Phone number</label>
            </div>
            <input
              type="text"
              className="input input-bordered rounded-sm w-full focus:border-0 text-xl"
              value={user?.phoneNumber || "Number not found"}
              readOnly
            />
          </div>
          <div>
            <div className="label font-bold text-xl">
              <label>Last sign in time</label>
            </div>
            <input
              type="text"
              className="input input-bordered rounded-sm w-full focus:border-0 text-xl"
              value={user?.metadata?.lastSignInTime || "Number not found"}
              readOnly
            />
          </div>
          <Link
            to="/dashboard/profileUpdate"
            className="btn btn-accent w-full mt-10"
          >
            Update your profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
