import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Contcat.css";

const Contact = () => {
  return (
    <div className="footer">
      <div className="copyRight">
        <p>@ Copyright All rights reserved! created by Ali Lahhmar</p>
      </div>

      <div className="list-info">
        <div className="contacts">
          <h4>Contacts</h4>
          <p>email: lahmarali963@gamil.com</p>
          <p>tel: +21694135867</p>
        </div>
        <div className="icons">
          <FaFacebook className="iconsDash" />
          <Link to="https://www.linkedin.com/in/ali-lahmar-a159aa11b/">
            <FaLinkedin className="iconsDash" />
          </Link>
          <FaTwitter className="iconsDash" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
