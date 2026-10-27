import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Property from "./pages/Property";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="listings" element={<Listing />} />
        <Route path="property" element={<Property />} />
      </Route>
    </Routes>
  );
}
