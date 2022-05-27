import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile container mx-auto">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side  lg:w-64">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here  */}
          <li>
            <Link to="myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="myorder">My Order</Link>
          </li>
          <li>
            <Link to="addreview">Add Review</Link>
          </li>
          <li>
            <Link to="manageOrder">Manage Order</Link>
          </li>
          <li>
            <Link to="addProduct">Add Prodct</Link>
          </li>
          <li>
            <Link to="makeAdmin">Make Admin</Link>
          </li>
          <li>
            <Link to="manageProducts">Manage Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
