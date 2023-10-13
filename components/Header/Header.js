import Link from "next/link";
import React, { useEffect, useState } from "react";

const nevlink = [
  {
    id: 1,
    name: "Home",
    href: "#home-section",
  },
  {
    id: 2,
    name: "About",
    href: "#about-section",
  },
  {
    id: 3,
    name: "Resume",
    href: "#resume-section",
  },
  {
    id: 4,
    name: "Services",
    href: "#services-section",
  },
  {
    id: 5,
    name: "Skills",
    href: "#skills-section",
  },
  {
    id: 6,
    name: "Projects",
    href: "#projects-section",
  },
//   {
//     id: 7,
//     name: "My Blog",
//     href: "#blog-section",
//   },
  {
    id: 8,
    name: "Contact",
    href: "#contact-section",
  },
];

const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? "sticky-top" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target d-none d-xl-block ${sticky}`;

  return (
    <nav className={classes}>
      <div className="container">
        <Link className="navbar-brand" href="index.html">
          Om Davra
        </Link>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {nevlink.map((item, index) => {
              return (
                <li key={item.id} className="nav-item">
                  <Link href={item.href} className="nav-link">
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
