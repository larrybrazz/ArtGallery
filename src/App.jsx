
import "./App.css";
import "react-toastify/dist/ReactToastify.css"
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Footer/Footer";
import MarketPlace from "./Components/MarketPlace/MarketPlace";
import Auctions from "./Components/Auctions/Auctions";
import ProductDisplay from "./Components/MarketPlace/ProductDisplay";
import Cart from "./Components/Cart/Cart";
import ShoppingCart from "./Components/Cart/ShoppingCart";
import ShoppingDetails from "./Components/Cart/ShippingDetails";
import PaymentDetails from "./Components/Cart/PaymentDetails";
import { ToastContainer } from "react-toastify";
import Livebid from "./Components/Auctions/Livebid";
import Drops from "./Components/Drops/Drops";

function App() {
  
  return (
    <div className="z-0">
      <ToastContainer />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/drops" element={<Drops />} />
          <Route
            path="/productdisplay"
            element={
              <ProductDisplay />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/shoppingdetails" element={<ShoppingDetails />} />
          <Route path="/paymentdetails" element={<PaymentDetails />} />
          <Route path="/livebid" element={<Livebid />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
