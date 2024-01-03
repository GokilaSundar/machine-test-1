import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateAds from "./components/CreateAds";
import Navigation from "./components/Navigation";
import TextAd from "./components/TextAd";
import TextMedia from "./components/TextMedia";
import Product from "./common/Product";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/createAds" element={<CreateAds />}></Route>
        <Route path="/Products" element={<Product />}></Route>
        <Route path="/textAd" element={<TextAd />}></Route>
        <Route path="/textMedia" element={<TextMedia />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
