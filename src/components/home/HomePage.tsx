import { FC, useEffect } from "react";
import scss from "./HomePage.module.scss";
import { SiJordan } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelectore } from "../../store/Store";
import axios from "axios";
import { setData } from "../../store/slice/SliceData";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_ID;

const HomePage: FC = () => {
  const { data } = useAppSelectore((s) => s.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    let { data } = await axios.get(API);
    dispatch(setData(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const great = [
    {
      photo:
        "https://images.satu.kz/203650357_w640_h640_basketbolnye-krossovki-nike.jpg",
      title: "Nike Air 13",
    },
    {
      photo:
        "https://images.satu.kz/203650664_w640_h640_basketbolnye-krossovki-nike.jpg",
      title: "Nike 2",
    },
    {
      photo:
        "https://images.satu.kz/203650516_w1280_h640_basketbolnye-krossovki-nike.jpg",
      title: "Nike KD 16",
    },
  ];

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
              {data.length === 0 ? (
                <p>No products available.</p>
              ) : (
                data.map((product, index) => (
                  <div
                    onClick={() => navigate("/Jordan")}
                    className={scss.cart}
                    key={index}
                  >
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <span>{product.category}</span>
                    <p className={scss.price}>${product.price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      {/* ! */}

      <section id={scss.nike}>
        <div className="container">
          <div className={scss.scrollWrapper}>
            <div className={scss.Img}>
              {great.map((item, index) => (
                <div key={index} className={scss.card}>
                  <img src={item.photo} alt="" />
                  <h1>{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id={scss.reklama}>
        <div className="container">
          <div className={scss.reklama}>
            <div className={scss.cart_reklama}>
              <div className={scss.aaa}>
                <h2>LifeStile</h2>
                <button>Shop</button>
              </div>
            </div>
            <div className={scss.cart_reklama}>
              <div className={scss.aaa}>
                <h2>Performance</h2>
                <button>Shop</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
