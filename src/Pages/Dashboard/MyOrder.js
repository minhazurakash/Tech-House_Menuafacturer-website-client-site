import React from "react";

const MyOrder = () => {
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
              {/* {products.map((product, index) => (
                <ManageOrderRow
                  key={product._id}
                  items={product}
                  index={index}
                ></ManageOrderRow>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
