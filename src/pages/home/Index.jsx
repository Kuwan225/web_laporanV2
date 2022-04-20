import React from "react";
import Navbar from "../../components/Navbar";
import "./home.scss";
import img from "../../image/bg1.jpg";
import img2 from "../../image/img2.svg";
import img3 from "../../image/img.svg";
import whatsapp from "../../image/whatsapp.png";
import telephone from "../../image/instagram.png";
import instagram from "../../image/phone-call.png";
import Produk from "../../produk";

import Button from "../../components/Button";
import Card from "../../components/Card";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="container-home">
      <Navbar />
      <div className="content-home">
        <section className="section1">
          <div className="caption">
            <h1>Hallo!</h1>
            <hr />
            <p>
              Selamat datang di website promosi sayuran bapak toto dimana
              mempromosikan berbagai jenis sayuran dan buah-buahan segar,
              Berkualitas dan tentunya halal.
            </p>
            <div className="button">
              <Link to="produk" smooth={true} duration={1000}>
                <Button label={"Lihat Produk"} />
              </Link>
            </div>
          </div>
          <img src={img} />
        </section>
        <section className="section2" id="tentang">
          <div className="container-section2">
            <div className="title">
              <h1>Tentang</h1>
              {/* <hr /> */}
            </div>
            <div className="content-section2">
              <ul>
                <li>Website ini mulai di bangun pada tanggal 15 april 2022</li>
                <li>
                  Bertujuan untuk mempromosikan produk jualan secara online
                </li>
              </ul>
            </div>
          </div>
          {/* <img src={img2} className="img-ngucur" /> */}
        </section>
        <section className="section3" id="produk">
          {/* <img src={img3} className="imgSection3" /> */}

          <div className="container-section3">
            <div className="title">
              <h1>Produk Sayuran</h1>
              {/* <hr /> */}
            </div>

            <div className="content-section3">
              {Produk.map((data, idx) => (
                <Card key={idx} data={data} />
              ))}
            </div>
          </div>
        </section>

        <section className="section4" id="lokasi">
          <div className="content-section4">
            <div className="title">
              <h1>Lokasi</h1>
              {/* <hr /> */}
            </div>
            <div className="maps" style={{ height: "70vh" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.669312458831!2d107.57347572561729!3d-6.930071594631811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e60004ce4e63%3A0xff44f110e0801cf8!2s3HCF%2B8XM%2C%20Wr.%20Muncang%2C%20Kec.%20Bandung%20Kulon%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040211%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1650027502990!5m2!1sid!2sus"
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </div>
          </div>
        </section>

        <section className="section5" id="kontak">
          <div className="container-section5">
            <div className="title">
              <h1>Kontak</h1>
              {/* <hr /> */}
            </div>

            <div className="content-section5">
              <div className="left">
                <input type="email" placeholder="Alamat Email" />
                <textarea cols="30" rows="10" placeholder="Pesan"></textarea>
              </div>
              <div className="right">
                <h1>Kontak kami melalui</h1>
                <p>
                  <img src={telephone} />
                  Telephone
                </p>
                <p>
                  <img src={whatsapp} />
                  whatsaap
                </p>
                <p>
                  <img src={instagram} />
                  Instagram
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>@Copyright Sayuran Bapak Toto || Kuwan</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
