import "./navbar.scss";
import React, { useState } from "react";
import img from "../image/img.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <img src={img} className="imgNav" />
      <div className="nav">
        <div className="logo">
          <h1>Sayuran Bapak Toto</h1>
        </div>

        <ul>
          <li
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            Beranda
          </li>
          <li>
            <Link to="tentang" smooth={true} duration={1000}>
              Tentang
            </Link>
          </li>
          <li>
            <Link to="produk" smooth={true} duration={1000}>
              Produk
            </Link>
          </li>
          <li>
            <Link to="lokasi" smooth={true} duration={1000}>
              Lokasi
            </Link>
          </li>
          <li>
            <Link to="kontak" smooth={true} duration={1000}>
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
