/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GetStartedPage from "./pages/GetStartedPage";
import OwnerLoginPage from "./pages/petowner/OwnerLoginPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import OwnerSignupPage from "./pages/petowner/OwnerSignupPage";
import AdminSignupPage from "./pages/admin/AdminSignupPage";
import OwnerDashboardPage from "./pages/petowner/OwnerDashboardPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminStorePage from "./pages/admin/AdminStorePage";
import AdminAddStorePage from "./pages/admin/AdminAddStorePage";
import AdminBookingsPage from "./pages/admin/AdminBookingsPage";
import AdminAddBookingPage from "./pages/admin/AdminAddBookingPage";
import AdminDeliveryPage from "./pages/admin/AdminDeliveryPage";
import AdminAddDeliveryPage from "./pages/admin/AdminAddDeliveryPage";
import AdminPetProfilesPage from "./pages/admin/AdminPetProfilesPage";
import AdminAddPetPage from "./pages/admin/AdminAddPetPage";
import AdminEditPetPage from "./pages/admin/AdminEditPetPage";
import AdminEditBookingPage from "./pages/admin/AdminEditBookingPage";
import AdminEditStorePage from "./pages/admin/AdminEditStorePage";
import AdminEditDeliveryPage from "./pages/admin/AdminEditDeliveryPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminFeedbackPage from "./pages/admin/AdminFeedbackPage";
import BookingPage from "./pages/petowner/BookingPage";
import PetProfilesPage from "./pages/petowner/PetProfilesPage";
import AddPetPage from "./pages/petowner/AddPetPage";
import PetDetailsPage from "./pages/petowner/PetDetailsPage";

import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
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
          <Route path="/admin-edit-pet/:id" element={<AdminEditPetPage />} />
          <Route path="/admin-edit-booking/:id" element={<AdminEditBookingPage />} />
          <Route path="/admin-edit-store/:id" element={<AdminEditStorePage />} />
          <Route path="/admin-edit-delivery/:id" element={<AdminEditDeliveryPage />} />
          <Route path="/admin-edit-user/:id" element={<AdminEditUserPage />} />
          <Route path="/admin-feedback" element={<AdminFeedbackPage />} />
          <Route path="/owner-booking" element={<BookingPage />} />
          <Route path="/owner-pet-profiles" element={<PetProfilesPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/pet-details/:id" element={<PetDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
