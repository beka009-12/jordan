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


 API = import.meta.env.VITE_ID;

const HomePage: FC = () => {
  const { data } = useAppSelectore((s) => s.data);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const fetchData = async () => {
    let { data } = await axios.get(API);


  const fetchData = async () => {
    const { data } = await axios.get(API);

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

  console.log(data);


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
              {data.map((item, index) => (
                <div key={index} className={scss.cart}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <span>{item.category}</span>
                  <p>${item.price}</p>
                </div>
              ))}
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
          <div className={scss.cart}>
            <div className={scss.text}>
              <h1>Nike Air</h1>
              <button>learn more</button>
            </div>
            <img
              src="https://media.about.nike.com/img/5593cfa7-39ca-407f-a2f2-4347be5c2d96/su24-peg41-volt-womens-hero-re.jpg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjEyNSwid2lkdGgiOjMwMDAsImhlaWdodCI6MjAwMH0sInJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MH19fQ%3D%3D&s=98d8ef78c7d709be8fdbaf2e71edfb07162c9090c13207bdd5766c3b5b0d263f"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
