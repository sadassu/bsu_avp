import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomeLayout from "./layout/HomeLayout";
import AreaLayout from "./layout/AreaLayout";

import Homepage from "./pages/Homepage";
import AreaPage from "./pages/AreaPages";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* route for homepage */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>

      {/* route for areas */}
      <Route element={<AreaLayout />}>
        <Route path="/areas/:slug" element={<AreaPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
