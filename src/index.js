import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import ReturnsAndExchanges from "./pages/ReturnsAndExchanges";
import TrackYourOrder from "./pages/TrackYourOrder";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<ShippingAndDelivery />} />
          <Route path="/returns" element={<ReturnsAndExchanges />} />
          <Route path="/track-order" element={<TrackYourOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);
