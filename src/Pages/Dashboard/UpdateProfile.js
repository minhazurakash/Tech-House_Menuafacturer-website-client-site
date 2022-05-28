import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const UpdateProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  console.log(user);
  const imageBB = "aa4aaa3a9ccbadaf185b172aaa46e5ff";
  useEffect(() => {
    if (error) {
      toast.error(error.code.split("/")[1], {
        autoClose: 1000,
        position: "top-center",
      });
    }
  }, [error]);

  if (updating) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    const name = data.name;
    const number = data.number;
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageBB}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (result.success) {
          const photoUrl = result.data.url;
          await updateProfile({
            displayName: name,
            photoURL: photoUrl,
            phoneNumber: number,
          });
          reset();
          toast.success("Update successful", {
            autoClose: 1000,
            position: "top-center",
          });
        }
      });
  };
  return (
    <div className="flex justify-center mt-14">
      <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-4xl mb-5 font-bold text-center">
            Update your profile!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div>
              <label className="lebel-text label">Name</label>
              <input
                {...register("name")}
                type="name"
                placeholder="Enter your name"
                class="input input-bordered input-accent w-full bg-transparent"
                required
              />
            </div>
            <div>
              <label className="lebel-text label">Phone number</label>
              <input
                {...register("number")}
                type="number"
                placeholder="Enter your password"
                class="input input-bordered input-accent w-full bg-transparent"
                required
              />
            </div>
            <div>
              <label className="lebel-text label">Your photo</label>
              <input
                {...register("photo")}
                type="file"
                placeholder="Enter your password"
                class="input input-bordered input-accent w-full bg-transparent"
                required
              />
            </div>

            <input
              type="submit"
              class="btn btn-bordered btn-accent w-full mt-5"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
