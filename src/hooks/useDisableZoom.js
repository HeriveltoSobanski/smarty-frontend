import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useDisableZoom() {
  const location = useLocation();

  useEffect(() => {
    const zoomBlockedRoutes = ["/login", "/register", "/dashboard"];
    const metaTag = document.querySelector("meta[name=viewport]");

    if (zoomBlockedRoutes.includes(location.pathname)) {
      metaTag?.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
      document.addEventListener("gesturestart", (e) => e.preventDefault());
      document.addEventListener("gesturechange", (e) => e.preventDefault());
      document.addEventListener("gestureend", (e) => e.preventDefault());
    } else {
      metaTag?.setAttribute("content", "width=device-width, initial-scale=1.0");
    }

    return () => {
      document.removeEventListener("gesturestart", (e) => e.preventDefault());
      document.removeEventListener("gesturechange", (e) => e.preventDefault());
      document.removeEventListener("gestureend", (e) => e.preventDefault());
    };
  }, [location]);
}
