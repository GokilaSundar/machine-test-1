import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateAds from "./components/CreateAds";
import Navigation from "./components/Navigation";
import TextAd from "./components/TextAd";
import TextMedia from "./components/TextMedia";
import Products from "./common/Products";
import Add from "../src/pages/products/add/page"
import Edit from "../src/pages/products/edit/page"
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/createAds" element={<CreateAds />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/textAd" element={<TextAd />}></Route>
        <Route path="/textMedia" element={<TextMedia />}></Route>
        <Route path="/products/add" element={<Add/>}></Route>
        <Route path="/products/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
