import { useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { wa, PHONE, PHONE_HREF, EMAIL, LOGO } from "./data";

const NAV = [
  ["/", "Home"],
  ["/puppies", "Puppies"],
  ["/happy-families", "Happy families"],
  ["/how-it-works", "How it works"],
  ["/faq", "FAQ"],
  ["/contact", "Visit & contact"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const firstLoad = useRef(true);

  const { pathname, hash } = useLocation();

  // Page transition animation
  useEffect(() => {
    setOpen(false);

    // Skip animation on initial website load
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    // Hash navigation: only scroll, no loader
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 60);

      return () => clearTimeout(timer);
    }

    // Show puppy loader on route change
    setShowLoader(true);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Puppy Page Transition Loader */}

      {showLoader && (
        <div className="puppy-loader">
          <div className="loader-content">
            <div className="puppy-animation">
              <span className="paw paw-one">🐾</span>
              <span className="paw paw-two">🐾</span>

              <img
                src="/images/puppy-running.gif"
                alt="Running TeddyPups puppy"
                className="loader-dog"
              />
            </div>

            <h2>every puppy is family</h2>
          </div>
        </div>
      )}

      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Topbar */}
      <div className="topbar">every puppy is family</div>

      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <img src={LOGO} alt="" width="36" height="36" />
            <span>TeddyPups</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main">
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>

          <a
            className="btn btn-wa hide-sm"
            href={wa()}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="drawer" role="dialog" aria-modal="true">
          <div className="drawer-head">
            <span className="hand">where to, friend?</span>

            <button className="menu-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>

          <nav>
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>

          <a
            className="btn btn-wa"
            href={wa()}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>

          <a className="drawer-phone" href={PHONE_HREF}>
            {PHONE}
          </a>
        </div>
      )}

      {/* Main Page Content */}
      <main id="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3 className="serif">Home, at last.</h3>

            <p>
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature
              puppies, offering premium services and worldwide shipping.
            </p>
          </div>

          <div>
            <h4>Explore</h4>

            <ul>
              <li>
                <Link to="/puppies">Available puppies</Link>
              </li>
              <li>
                <Link to="/gone-home">Gone home</Link>
              </li>
              <li>
                <Link to="/happy-families">Happy families</Link>
              </li>
              <li>
                <Link to="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link to="/how-it-works#delivery">
                  Delivery &amp; collection
                </Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Visit &amp; contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Say hello</h4>

            <ul>
              <li>
                <a href={wa()} target="_blank" rel="noreferrer">
                  WhatsApp {PHONE}
                </a>
              </li>

              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>

              <li>Downtown Dubai, United Arab Emirates</li>
            </ul>

            <ul className="social">
              <li>
                <a
                  href="https://www.instagram.com/teddypups.worldwide/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@teddypupsuae"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61567496944539"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container copyright">
          <span>
            <img src={LOGO} alt="" width="22" height="22" />©{" "}
            {new Date().getFullYear()} TeddyPups U.A.E.
          </span>

          <span className="hand">every puppy is family</span>
        </div>
      </footer>

      {/* Sticky WhatsApp and Call Buttons */}
      <div className="sticky-cta">
        <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>

        <a className="btn btn-ghost" href={PHONE_HREF}>
          Call
        </a>
      </div>
    </>
  );
}
