"use client";

import React, { useState } from "react";
import "./header.css";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top second-header d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 d-none d-md-block">
              <div className="header-cta">
                <ul>
                  <li>
                    <i className="fas fa-envelope"></i>

                    <span>info@numeraliot.com</span>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt"></i>
                    <span>Solanite Godowns, Mombasa RD, Nairobi.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-none d-lg-block">
              <div className="header-social text-right">
                <span>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" menu-wrapper">
        <div className="logo">logo</div>
        <div className="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="#faq">FAQs</Link>
            </li>
            {/* <li>
              <Link href="/blog">Blog</Link>
            </li> */}
            <li className="custom-btn">Get Intouch</li>
          </ul>
        </div>

        {/* Toggle menu btn */}
        <div className="toggle-menu">
          <button className="toggle-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`menu-small ${isMenuOpen ? "slide-in" : "slide-out"}`}
          >
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#features" onClick={closeMenu}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" onClick={closeMenu}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contactus" onClick={closeMenu}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
