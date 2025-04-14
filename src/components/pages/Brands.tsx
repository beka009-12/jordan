import { FC } from "react";
import scss from "./Brands.module.scss";

const Brands: FC = () => {
  return (
    <>
      <section id={scss.main}>
        <div className="container">
          <div className={scss.main}>
            <div className={scss.div}>
              <div className={scss.quantity}>
                <h3>Shoues </h3>
                <p>/</p>
                <h3>Air Max</h3>
                <p>/</p>
                <h3>Air Max Dn</h3>
              </div>
              <h2>Air Max Dn (6)</h2>
            </div>
            <div className={scss.show}>
              <h3>Show</h3>
              <div className={scss.select}>
                <select>
                  <option>Sort</option>
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Price:High-Low</option>
                  <option>Price:Low - High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={scss.Brands}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.text}>
              <h2>Air Max Dn8</h2>
              <h2>Air Max Dn</h2>
              <h2>Air Max 1</h2>
              <h2>Air Max 90</h2>
              <h2>Air Max 95</h2>
              <h2>Air Max 97</h2>
              <h2>Air Max 270</h2>
              <h2>Air Max Plus</h2>
              <h2>Vapor Max</h2>
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
              <div className={scss.cart}>
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60120284-9c6c-4eb8-aee8-b4179c20eb57/AIR+MAX+DN8.png"
                  alt=""
                />
                <h3>Nike Air Max Dn8</h3>
                <span>Women's Shoes</span>
                <p>$245</p>
              </div>{" "}
              <div className={scss.cart}>
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da65bdd4-2934-47d8-8df1-1c1af2c2835f/W+AIR+MAX+DN8.png"
                  alt=""
                />
                <h3>Nike Air Max Dn8</h3>
                <span>Women's Shoes</span>
                <p>$250</p>
              </div>
              <div className={scss.cart}>
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da65bdd4-2934-47d8-8df1-1c1af2c2835f/W+AIR+MAX+DN8.png"
                  alt=""
                />
                <h3>Nike Air Max Dn8</h3>
                <span>Women's Shoes</span>
                <p>$250</p>
              </div>
              <div className={scss.cart}>
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da65bdd4-2934-47d8-8df1-1c1af2c2835f/W+AIR+MAX+DN8.png"
                  alt=""
                />
                <h3>Nike Air Max Dn8</h3>
                <span>Women's Shoes</span>
                <p>$250</p>
              </div>
              <div className={scss.cart}>
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da65bdd4-2934-47d8-8df1-1c1af2c2835f/W+AIR+MAX+DN8.png"
                  alt=""
                />
                <h3>Nike Air Max Dn8</h3>
                <span>Women's Shoes</span>
                <p>$250</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
