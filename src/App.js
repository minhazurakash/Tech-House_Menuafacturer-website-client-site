import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import "animate.css";
import SingleProduct from "./Pages/Shared/SingleProduct";
import Login from "./Pages/Shared/Login";
import Signup from "./Pages/Shared/Signup";
import Reset from "./Pages/Shared/Reset";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route
          path="/product/:_id"
          element={<SingleProduct></SingleProduct>}
        ></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
