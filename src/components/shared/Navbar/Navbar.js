import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Navbar = () => {
  let history = useHistory();

  const [open, setOpen] = useState(false);
  useEffect(() =>
    history.listen(() => {
      setOpen(false);
    })
  );
  console.log(open);

  const firebase = useFirebase();
  const role = useSelector((state) => state.firebase.profile.role);

  // const NavbarItems = [
  //   {
  //     label: "Dashboard",
  //     url: "/dashboard",
  //     active: false,
  //   },
  //   {
  //     label: "Community",
  //     url: "/community",
  //     active: false,
  //   },
  //   {
  //     label: "List a space",
  //     url: "/listaspace",
  //     active: false,
  //   },
  //   {
  //     label: "Find a space",
  //     url: "/allspaces",
  //     active: false,
  //   },
  // ];

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <h1 class="logo"><a href="index.html" style="font-weight: 500;">LiteStore</a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        <Link to="/">
          <a href className="logo">
            <img src="assets/img/logo.webp" alt="" className="img-fluid" />
          </a>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            {/* {NavbarItems.map((item, index) => {
              console.log(item.url);
              return (
                <>
                  <Link to={`/${item.url}`} key={index}>
                    <li>
                      <a
                        className={`px-2 py-4 text-blueGray-500 hover:text-blueGray-600 scrollto  ${
                          router.asPath === item.url
                            ? "text-blueGray-600"
                            : "text-blueGray-500"
                        }`}
                        href
                        style={{ fontWeight: "bold" }}
                      >
                        Dashboard
                      </a>
                    </li>
                  </Link>
                </>
              );
            })} */}
            <Link to="/dashboard">
              <li>
                <p
                  className="nav-link scrollto visited:text-black active:text-black focus:text-black"
                  style={{ fontWeight: "bold" }}
                >
                  Dashboard
                </p>
              </li>
            </Link>
            <Link to="/community">
              <li>
                <a
                  className="nav-link scrollto"
                  href="community.html"
                  style={{ fontWeight: "bold" }}
                >
                  Community
                </a>
              </li>
            </Link>
            <Link to="/listaspace">
              <li>
                <a className="nav-link scrollto" href="list-your-space.html">
                  List a space
                </a>
              </li>
            </Link>
            <Link to="/allspaces">
              <li>
                <a className="nav-link scrollto" href="list-your-space.html">
                  Find a space
                </a>
              </li>
            </Link>

            <li className="dropdown">
              <a className="nav-link scrollto" href="#">
                <span>FAQs</span> <i className="fas fa-chevron-down" />
              </a>
              <ul>
                {/* <li><a class="nav-link scrollto" href="faqs/faqs-general.html" style="font-weight: bold;">All</a></li> */}
                <Link
                  to="/faqs"
                  className="nav-link scrollto"
                  style={{ fontWeight: "bold" }}
                >
                  <li>All</li>
                </Link>
                <li>
                  <Link to="/faqs/general" className="nav-link scrollto">
                    General
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/faqs" href="#">
                    <span>For Landowners</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/faqs/landowners/general"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-1"
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/how-it-works"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-2"
                      >
                        How does it work
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/legal-questions"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-3"
                      >
                        Legal Questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/landowners/payments"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-landowners.html#sec-4"
                      >
                        Payments
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/faqs" href="#">
                    <span>For Brands and Businesses</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link
                        to="/faqs/brands/how-it-works"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-5"
                      >
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/booking-a-space"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-6"
                      >
                        Booking a Space
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/legal-questions"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-7"
                      >
                        Legal Questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faqs/brands/payments"
                        className="nav-link scrollto"
                        href="faqs/faqs-for-brands.html#sec-8"
                      >
                        Payments and Pricing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#lsservices"
                  >
                    LiteStore Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#covid"
                  >
                    Covid-19 Questions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs/litestore"
                    className="nav-link scrollto"
                    href="faqs/faqs-litestore.html#designers"
                  >
                    For Designers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="nav-link scrollto" href="#">
                <span>Account</span> <i className="fas fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <Link
                    to="/login"
                    // className="nav-link scrollto"
                    // data-bs-toggle="modal"
                    // data-bs-target="#loginmod"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/signup",
                      role: "LandOwner",
                    }}
                    className="nav-link scrollto"
                  >
                    Land Owner Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/signup",
                      role: "Brand",
                    }}
                    className="nav-link scrollto"
                  >
                    Brand Sign Up
                  </Link>
                </li>
                {role && (
                  <li>
                    <Link to="/login">
                      <span
                        onClick={() => firebase.logout()}
                        className="text-sm  ml-2"
                      >
                        Logout
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <a
                className="nav-link scrollto phone-sty"
                href="tel:+91-6363294498"
              >
                <i
                  className="fas fa-phone-alt fa-4x"
                  style={{ padding: "10px 10px 10px 0px" }}
                />
                6363294498
              </a>
            </li>
          </ul>
          <button type="button" onClick={() => setOpen(!open)}>
            <i className="fas fa-list mobile-nav-toggle" />
          </button>
        </nav>
        {/* .navbar */}
      </div>
      {open && (
        <nav>
          <ul
            className={` list-reset md:flex md:items-center md:justify-center `}
          >
            <li className="md:ml-2">
              <Link
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-2">
              <Link
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="md:ml-2">
              <Link
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                to="/community"
              >
                Community
              </Link>
            </li>
            <li className="md:ml-2">
              <Link
                className="block no-underline hover:underline py-2 text-gray-darkest hover:text-black md:border-none md:p-0 md:text-xl md:font-semibold"
                to="/allspaces"
              >
                Find a space
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
