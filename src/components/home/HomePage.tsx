import { FC } from "react";
import scss from "./HomePage.module.scss";
import { SiJordan } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@mui/material";

const HomePage: FC = () => {
  return (
    <>
      <section id={scss.HomePage}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.brand}>
              <SiJordan className={scss.jordan} />
              <nav>
                <p>New Releases</p>
                <p>Jordan Basketball</p>
                <p>Purpose & Community</p>
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
              </nav>
            </div>
            <div className={scss.bcimg}>
              <img
                src="https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/bba76ce9-61bf-466b-b0f5-ac779feb333c/image.png"
                alt=""
              />
              <div className={scss.text}>
                <p>'Space Navigator'</p>
                <h1>LUKA 4</h1>
                <p>Stability. Zoom Air. Nice Shoes.</p>
              </div>
              <button>Shop</button>
            </div>
          </div>
        </div>
      </section>

      {/* ! */}
      <section id={scss.popular}>
        <div className="container">
          <div className={scss.products}>
            <div className={scss.popular_text}>
              <h2>Popular Right Now</h2>
              <div className={scss.btn}>
                <Button sx={{ width: "40px", height: "60px" }}>
                  <IoIosArrowBack style={{ color: "#000", fontSize: "25px" }} />
                </Button>
                <Button sx={{ width: "40px", height: "60px" }}>
                  <IoIosArrowForward
                    style={{ color: "#000", fontSize: "25px" }}
                  />
                </Button>
              </div>
            </div>
            <div className={scss.box}>
              <div className={scss.cart}>
                <img
                  src="https://wallpapers.com/images/hd/nike-air-max270-white-sneaker-1z2xvy8j3zhppmku.jpg"
                  alt=""
                />
                <h3>Air Jordan 3</h3>
                <span>Women's Shoes</span>
                <p>$180</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ! */}

      <section id={scss.nike}>
        <div className="container">
          <div className={scss.img}>
            <img
              src="https://classic.cdn.media.amplience.net/i/hibbett/D3523_4000_main"
              alt=""
            />
            <div className={scss.global}>
              <img
                src="https://www.nikesb.com/assets/imager/uploads/67515/DH9227-100-PHCFH001_bd624c85e984eb4b3e5bbc5eb4b33f00.png"
                alt=""
              />
              <img
                src="https://media.gq.com/photos/675b31debbc84e8ce8c5b9a6/master/w_1600%2Cc_limit/air-jordan-1-retro-low-chicago-release-date%2520(1).png"
                alt=""
              />
              <img
                src="https://image.cnbcfm.com/api/v1/image/106832392-1611931738880-CW5883-100_237589929_D_R_1X1_original.png?v=1611939182&w=1600&h=900"
                alt=""
              />
              <img
                src="https://www.pngkey.com/png/full/58-583999_nike-orange-nike-swoosh-png.png"
                alt=""
              />
              <h2>Nike is comfort, style and confidence in every move.</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
