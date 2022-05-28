import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const { data: databaseUser, isLoading } = useQuery("user", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  const [user, Loading] = useAuthState(auth);
  if (isLoading || Loading) {
    return <p>Loading.........</p>;
  }
  const visitor = databaseUser.filter((u) => u.email === user.email);
  const isAdmin = visitor[0]?.role;
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
          {isAdmin !== "admin" ? (
            <>
              <li>
                <Link to="myorder">My Order</Link>
              </li>
              <li>
                <Link to="addreview">Add Review</Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
