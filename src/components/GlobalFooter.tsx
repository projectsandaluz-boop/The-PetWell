import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function GlobalFooter() {
  const location = useLocation();
  const path = location.pathname;

  // Pages with no global footer (they have their own or none)
  const noFooterPages = ["/", "/get-started"];
  if (noFooterPages.includes(path) || path.startsWith("/owner-")) {
    return null;
  }

  // Pages with sidebar (footer needs left margin)
  const isDashboardPage = (path.includes("-dashboard") || 
                          path.includes("-store") || 
                          path.includes("-bookings") || 
                          path.includes("-delivery") || 
                          path.includes("-pet-profiles") || 
                          path.includes("-add-") || 
                          path.includes("-edit-") || 
                          path.includes("-feedback") ||
                          path.includes("/owner-pet-profiles") ||
                          path.includes("/pet-details")) && path !== "/add-pet";

  const isAuthPage = path.includes("-login") || path.includes("-signup");

  if (isDashboardPage) {
    return <Footer className="fixed bottom-0 left-72 right-0" />;
  }

  if (isAuthPage) {
    return <Footer className="fixed bottom-0 w-full" />;
  }

  return <Footer className="fixed bottom-0 w-full" />;
}
