import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div>
            <h3>Top Products</h3>
            <ul>
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>Guides</li>
              <li>Research</li>
              <li>Experts</li>
              <li>Agencies</li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>You can trust us. We only send promo offers.</p>
            <input type="text" placeholder="Your Email Address" />
            <button type="submit">SUBSCRIBE</button>
            <div className="socials">
              <a href="#">f</a>
              <a href="#">t</a>
              <a href="#">d</a>
              <a href="#">b</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright ©2024 All rights reserved | This template is made with 3 by
          Colorlib
        </div>
      </footer>
    </>
  );
}

export default Footer;
