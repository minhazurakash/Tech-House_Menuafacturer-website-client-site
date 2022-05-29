import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  const handleRating = (event) => {
    const rating = event.target.value;
    if (rating > 5) {
      alert("Rating should not bigger then 5");
      event.target.value = "";
    } else if (rating < 0) {
      alert("Rating should not smaller then 0");
      event.target.value = "";
    }
  };
  const handleAddReview = (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const review = event.target.review.value;
    const name = user.displayName;
    const email = user.email;
    const image =
      user.photoURL || "https://i.ibb.co/HTHRkjj/doctor-profile-350x350.png";
    const reviewDoc = { rating, review, name, email, image };

    fetch("https://dry-reaches-86494.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successful", {
            autoClose: 1000,
            position: "top-center",
          });
        }
      });
  };
  return (
    <div className="justify-center flex">
      <div class="card flex-shrink-0 w-full lg:max-w-lg sm:w-9/12 shadow-2xl bg-base-100 mt-10">
        <div class="card-body">
          <h1 class="text-4xl mb-5 font-bold text-center">
            Give your feedback !
          </h1>
          <form onSubmit={handleAddReview} className="grid gap-4">
            <div>
              <label className="lebel-text label">Rating</label>
              <input
                onChange={handleRating}
                name="rating"
                type="number"
                placeholder="Please give a number within 1-5"
                class="input input-bordered input-accent w-full bg-transparent"
                required
              />
            </div>
            <div>
              <label className="lebel-text label">Comment</label>
              <textarea
                name="review"
                type="text"
                placeholder="Your comment are here..."
                class="textarea-bordered textarea textarea-accent w-full h-28 bg-transparent"
                required
              />
            </div>
            <input
              type="submit"
              class="btn btn-bordered btn-accent w-full"
              value="Add your review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
