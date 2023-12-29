import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateAds from "./components/CreateAds";
import Navigation from "./components/Navigation";
import TextAd from "./components/TextAd";
import TextMedia from "./components/TextMedia";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/CreateAds" element={<CreateAds />}></Route>
        <Route path="/TextAd" element={<TextAd />}></Route>
        <Route path="/TextMedia" element={<TextMedia />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
