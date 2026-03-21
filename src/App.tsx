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
      </Routes>
    </BrowserRouter>
  );
}
