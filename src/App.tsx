/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GetStartedPage from "./pages/GetStartedPage";
import OwnerLoginPage from "./pages/OwnerLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import OwnerSignupPage from "./pages/OwnerSignupPage";
import AdminSignupPage from "./pages/AdminSignupPage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminStorePage from "./pages/AdminStorePage";
import AdminAddStorePage from "./pages/AdminAddStorePage";
import AdminBookingsPage from "./pages/AdminBookingsPage";
import AdminAddBookingPage from "./pages/AdminAddBookingPage";
import AdminDeliveryPage from "./pages/AdminDeliveryPage";
import AdminAddDeliveryPage from "./pages/AdminAddDeliveryPage";
import AdminPetProfilesPage from "./pages/AdminPetProfilesPage";
import AdminAddPetPage from "./pages/AdminAddPetPage";
import BookingPage from "./pages/BookingPage";
import PetProfilesPage from "./pages/PetProfilesPage";
import AddPetPage from "./pages/AddPetPage";
import PetDetailsPage from "./pages/PetDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/owner-login" element={<OwnerLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/owner-signup" element={<OwnerSignupPage />} />
        <Route path="/admin-signup" element={<AdminSignupPage />} />
        <Route path="/owner-dashboard" element={<OwnerDashboardPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin-store" element={<AdminStorePage />} />
        <Route path="/admin-add-store" element={<AdminAddStorePage />} />
        <Route path="/admin-bookings" element={<AdminBookingsPage />} />
        <Route path="/admin-add-booking" element={<AdminAddBookingPage />} />
        <Route path="/admin-delivery" element={<AdminDeliveryPage />} />
        <Route path="/admin-add-delivery" element={<AdminAddDeliveryPage />} />
        <Route path="/admin-pet-profiles" element={<AdminPetProfilesPage />} />
        <Route path="/admin-add-pet" element={<AdminAddPetPage />} />
        <Route path="/owner-booking" element={<BookingPage />} />
        <Route path="/owner-pet-profiles" element={<PetProfilesPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="/pet-details/:id" element={<PetDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
