import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import HomeLayout from "./layout/HomeLayout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
);
