import React from "react";
import Nav from "../Nav";
import "./Contact-Us.css";

function Contact() {
  return (
    <div className="contact_us">
      <Nav></Nav>
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div>
            <p>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={"/instagram.png"}
                  alt={"Instagram"}
                  style={{ width: "50px", marginRight: "5px" }}
                />
                <a
                  href="https://www.instagram.com/hs11roofing"
                  style={{ color: "white" }}
                >
                  @hs11roofing
                </a>
              </span>
            </p>
            <p>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={"/whatsapp-2.png"}
                  alt={"whatsapp"}
                  style={{ width: "50px", marginRight: "5px" }}
                />
                <a href="https://wa.me/+16045377999" style={{ color: "white" }}>
                  +1 604 537 7999
                </a>
              </span>
            </p>
          </div>
          <div>
            <p>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={"/location.png"}
                  alt={"location"}
                  style={{ width: "50px", marginRight: "5px" }}
                />
                <a
                  href="https://maps.app.goo.gl/rEjD3kwKTysw6wqd8"
                  style={{ color: "white" }}
                >
                  840 Lanfranco Rd, Kelowna, BC V1W 3X1, Canada
                </a>
              </span>
            </p>
            <p>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={"/telephone-call.png"}
                  alt={"telephone"}
                  style={{ width: "50px", marginRight: "5px" }}
                />
                <a href="tel:+16045377999" style={{ color: "white" }}>
                  +1 604 537 7999
                </a>
              </span>
            </p>
          </div>

          {/* Add more contact info as needed */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
