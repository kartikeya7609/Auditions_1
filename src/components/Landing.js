import React, { useEffect, useState } from "react";
import Auth from "../utilities/googleAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import logo from "../images/ieee-logo-light.png";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import { Instagram, Linkedin, Facebook, Globe, LinkIcon } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Using standard MUI icon for consistency

const socialLinks = [
  { icon: <WhatsAppIcon size={20} />, href: "https://chat.whatsapp.com/DS956oN4CHII3JdjJsFOaV" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/ieeesb_nitdgp" },
  { icon: <Linkedin size={20} />, href: "https://in.linkedin.com/company/ieeesbnitdgp" },
  { icon: <Facebook size={20} />, href: "https://www.facebook.com/nitdgpieeesociety/" },
  { icon: <Globe size={20} />, href: "https://ieee-sb-nitdgp.vercel.app/" }
];

const Landing = () => {
  const [signed_in, setSigned_in] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setSigned_in(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (signed_in) {
      const path = localStorage.getItem("Submitted") === "1" ? "/success" : "/reg";
      navigate(path);
    }
  }, [signed_in, navigate]);

  return (
    <div className="landing-page-wrapper">
      {/* 1. Navbar: Crystal Clear */}
      <nav className="navbar-modern">
        <div className="nav-container">
          {/* Logo Section */}
          <a
            className="navbar-brand"
            href="https://ieee-sb-nitdgp.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="IEEE Logo" className="nav-logo" />
          </a>

          {/* CTA Section */}
          <div className="nav-actions">
            {!signed_in ? (
              <button className="nav-register-btn" onClick={Auth}>
                Register Now
              </button>
            ) : (
              <span className="welcome-text thin-text">Welcome Back</span>
            )}
          </div>
        </div>
      </nav>      {/* 2. Hero Section: Truly Transparent Container */}
      <main className="hero-container">
        <div className="glass-content">
          <h1 className="hero-heading">
            IEEE SB NIT DURGAPUR <br />
            <span className="cyan-text">AUDITIONS</span>
          </h1>

          <div className="hero-desc">
            <p>
              IEEE is the world's largest professional association dedicated to
              advancing technological innovation and excellence for the benefit of humanity.
              <a href="https://www.ieee.org/" target="_blank" rel="noreferrer" className="inline-link">
                <LinkIcon size={16} />
              </a>
            </p>
            <p>
              The IEEE Student Branch, NIT Durgapur is a society of enthusiasts
              aimed at promoting research-related activities in the campus.
              <a href="https://ieee-sb-nitdgp.vercel.app" target="_blank" rel="noreferrer" className="inline-link">
                <LinkIcon size={16} />
              </a>
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card"><p>50+ Members</p></div>
            <div className="stat-card"><p>30+ Events</p></div>
            <div className="stat-card"><p>500+ Registrations</p></div>
          </div>

          {!signed_in && (
            <button className="glow-button" onClick={Auth}>
              Register Now
            </button>
          )}
        </div>
      </main>

      {/* 3. Footer: Anchored to Bottom */}
      <footer className="footer-modern">
        <div className="footer-blur-layer"></div>
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={logo} alt="IEEE Logo" className="footer-logo" />
              <p className="footer-tagline">Advancing Technology for Humanity</p>
            </div>

            <div className="footer-social-wrapper">
              <p className="social-label">Connect with us</p>
              <div className="social-links-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-circle"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-line"></div>
            <div className="footer-copyright">
              <span>© {new Date().getFullYear()} IEEE SB NITDGP</span>
              <span className="separator">|</span>
              <span className="thin-text">Developed with ❤️ by IEEE Web Team</span>
            </div>
          </div>
        </div>
      </footer>    </div>
  );
};

export default Landing;