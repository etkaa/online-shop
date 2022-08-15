import React from "react";
import "./Footer.styles.scss";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p className="copyright-text">Copyright &copy; ea {date}</p>
    </div>
  );
};

export default Footer;
