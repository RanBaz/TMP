import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* For Mobile Appliaction Downloader Buttons  */}
      {/* <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div> */}

      <div className="midFooter">
        <h1>TMP Online</h1>
        <p>Advancing our services to a new platform to bring your favourite snacks one step closer.</p>
        <p>Copyrights 2023 &copy; Team Varuna</p>
      </div>

      {/* For Social Media Handlers */}
      {/* <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div> */}
    </footer>
  );
};

export default Footer;
