import React from "react";
import "./Nav.css";
import Link from "next/link";
function Nav() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src="/hs11logo.jpeg" alt="Logo" />
        </div>
        <nav>
          <ul className="buttons">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/Contact-Us" className="contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
