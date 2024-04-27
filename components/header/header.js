import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="contact-stripe">
        <p className="stripe-contact-item">Call Us: 123-456-7890</p>
        <p className="stripe-contact-item">Email: info&#64;numeraliot.com</p>
      </div>
      <div className=" menu-wrapper">
        <div className="logo">logo</div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li className="custom-btn">Get Intouch</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
