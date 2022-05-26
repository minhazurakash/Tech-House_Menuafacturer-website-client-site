import React from "react";

const UpdateProfile = () => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const file = event.target.photo.file;
    const doc = { name, number, file };
    console.log(doc);
  };
  return (
    <div className="flex justify-center mt-14">
      <div class="card flex-shrink-0 w-full lg:max-w-md sm:w-9/12 shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="text-4xl mb-5 font-bold text-center">
            Update your profile!
          </h1>
          <form onSubmit={handleUpdate} className="grid gap-4">
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
              <label className="lebel-text label">Phone number</label>
              <input
                name="number"
                type="number"
                placeholder="Enter your password"
                class="input input-bordered input-accent w-full bg-transparent"
                required
              />
            </div>
            <div>
              <label className="lebel-text label">Your photo</label>
              <input
                name="photo"
                type="file"
                placeholder="Enter your password"
                class="input input-bordered input-accent w-full bg-transparent"
                required
              />
            </div>

            <input
              type="submit"
              class="btn btn-bordered btn-accent w-full mt-5"
              value="Signup"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
