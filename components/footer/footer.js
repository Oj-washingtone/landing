import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bg footer-p">
      <div className="footer-top pb-40">
        <div className="container footer-sections">
          <div className="row">
            <div className="col-sm-3">
              <div>
                <h3 className="poppins-bold footer-logo">Logo</h3>
              </div>
              <p>
                We're dedicated to child safety with innovative products. Our
                mission started with a simple idea - securing school buses for
                peace of mind. We monitor and secure school buses, ensuring safe
                school journeys.
              </p>
            </div>
            <div className="col-sm-3 footer-section links-section">
              <div>
                <h3 className="poppins-bold footer-section-title">Links</h3>
              </div>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link href="/#about">
                      <p className="link-item">
                        <i className="bi bi-chevron-double-right"></i> About
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#features">
                      <p className="link-item">
                        <i className="bi bi-chevron-double-right"></i> How It
                        Works
                      </p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/ai-assistant">
                      <p className="link-item">
                        <i className="bi bi-chevron-double-right"></i> FAQ
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <h3 className="poppins-bold footer-section-title">Get intouch</h3>
              <div className="footer-contact">
                <i className="bi bi-geo-alt"></i>
                <p>Solanite Godowns, Mombasa RD, Nairobi, Kenya</p>
              </div>
              <div className="footer-contact">
                <i className="bx bxs-envelope"></i>
                <p>info@numeraliot.com</p>
              </div>

              <div className="footer-contact">
                <i className="bx bxs-phone"></i>
                <p>+254 111 014 700</p>
              </div>
            </div>
            <div className="col-sm-3 footer-gal-wrapper">
              <h3 className="poppins-bold footer-section-title">Newsletter</h3>
              <div className="row">
                <p>Subscribe to our newsletter to get the latest updates</p>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="custom-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row  foter-copy-socials-wrapper">
            <div className="col-lg-6">
              Copyright © 2024 Numeral IoT All rights reserved.
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3 text-right text-xl-right">
              <ul>
                <li>
                  <span className="footer-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
