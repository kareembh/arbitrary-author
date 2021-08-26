import React from "react";
import { Link } from "gatsby";
import "./navMenu.scss";

export default function navMenu() {
  return (
    <div>
      <Link className="navMenuItem" to="/about/">
        About
      </Link>

      <Link className="navMenuItem" to="/featured/">
        Podcasts
      </Link>
      <Link className="navMenuItem" to="/coffeeBreak/">
        Coffee break
      </Link>
      <Link className="branding" to="/">
        Arbitrary Author
      </Link>
      <a className="navMenuItem" href="https://www.boost.am" target="_blank">
        Serices
      </a>
      <a
        className="navMenuItem"
        href="https://calendly.com/bsklivas/"
        target="_blank"
      >
        Book a call
      </a>
      <Link className="navMenuItem" to="/contact/">
        Contact
      </Link>
    </div>
  );
}
