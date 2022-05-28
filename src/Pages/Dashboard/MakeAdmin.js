import React from "react";

const MakeAdmin = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl uppercase mt-5">
        Manage Your user!
      </h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>
                  <button className="btn btn-xs">make admin</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
