import { FC, useEffect } from "react";
import scss from "./HomePage.module.scss";
import { SiJordan } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelectore } from "../../store/Store";
import { setData } from "../../store/slice/SliceData";
import axios from "axios";

const API = import.meta.env.VITE_ID;

const HomePage: FC = () => {
  const { data } = useAppSelectore((state) => state.data);
  const dispatch = useAppDispatch();

  const readProduct = async () => {
    const { data } = await axios.get(API);
    dispatch(setData(data.data));
  };

  useEffect(() => {
    readProduct();
  }, []);
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

      <section id={scss.nike}></section>
    </>
  );
};

export default HomePage;
