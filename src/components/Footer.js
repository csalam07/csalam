import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <p className="footer__copy">
          &#169; {new Date().getFullYear()} | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
