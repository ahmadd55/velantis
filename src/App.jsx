import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ListingDetail from "./pages/ListingDetail";
import OffPlan from "./pages/OffPlan";
import OffPlanDetail from "./pages/OffPlanDetail";
import Property from "./pages/Property";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="listings" element={<Listing />} />
        <Route path="listings/:id" element={<ListingDetail />} />
        <Route path="property" element={<Property />} />
        <Route path="off-plan" element={<OffPlan />} />
        <Route path="off-plan/:slug" element={<OffPlanDetail />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}
