import React from "react";

export default function Footer() {
  return (
    <footer className="footer-bg footer-p">
      <div className="footer-top pb-40">
        container here
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              Copyright © 2021 Capatel All rights reserved.
            </div>
            <div className="col-lg-6 text-right text-xl-right">
              <ul>
                <li>
                  <a href="#">Privercy</a>
                </li>
                <li>
                  <a href="#">Term &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
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
    //   <!-- footer-end -->
  );
}
