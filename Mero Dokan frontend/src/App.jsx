import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navigation/Navbar";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Protected from "./Pages/Protected";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Failure from "./Pages/Failure";
import AdminDashboard from "./Admin/AdminDashboard";
import Customer from "./Admin/Customer";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";
import EditUser from "./Admin/EditUser";
import Products from "./Pages/Products";
import AdminProduct from "./Admin/AdminProduct";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<Protected Comp={Products} />} />
        <Route
          path="/productDescription/:id"
          element={<Protected Comp={ProductDescription} />}
        />
        <Route path="/cart" element={<Protected Comp={Cart} />} />
        {/* <Route path="/Menu" element={<Menu />} /> */}
        <Route path="/Services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/editUser" element={<EditUser />} />
        {user?.role == "admin" && (
          <Route path="/AdminDashboard" element={<AdminDashboard />}>
            <Route path="product" element={<AdminProduct />} />
            <Route path="customer" element={<Customer />} />
          </Route>
        )}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
