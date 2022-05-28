import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import MyOrderRow from "./MyOrderRow";

const MyOrder = () => {
  const [user, Loading] = useAuthState(auth);
  console.log(user);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user?.email], () =>
    fetch(`http://localhost:5000/myorders?email=${user?.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading || Loading) {
    return "Loading....";
  }
  console.log(orders);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold uppercase mt-5">
        This is my order
      </h2>
      <div className="mt-10">
        <div class="overflow-x-auto">
          <table class="table w-full text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Order By</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <MyOrderRow
                  key={order._id}
                  order={order}
                  index={index}
                  refetch={refetch}
                ></MyOrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
