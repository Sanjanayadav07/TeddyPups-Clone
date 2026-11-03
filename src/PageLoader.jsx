
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageLoader.css";

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="puppy-loader">
      <div className="loader-content">
        <div className="paw paw-one">🐾</div>
        <div className="paw paw-two">🐾</div>

        <div className="loader-dog">🐕</div>

        <h2>every puppy is family</h2>
      </div>
    </div>
  );
}
