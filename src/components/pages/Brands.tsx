import { FC } from "react";
import scss from "./Brands.module.scss";

const Brands: FC = () => {
  return (
    <section className={scss.Brands}>
      <div className="container">
        <div className={scss.content}>Brands</div>
      </div>
    </section>
  );
};

export default Brands;
