import { FC } from "react";
import scss from "./Header.module.scss";
import { link } from "../../../constants/Link";
import { Link, useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <section id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo_nike}>
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                fill-rule="evenodd"
                d="M 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.132813 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.117188 16.132813 50.058594 15.925781 49.644531 16.027344 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.421875 26.382813 C 7.230469 26.382813 5.078125 24.851563 5.078125 21.503906 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 Z"
              ></path>
            </svg>
          </div>
          <nav>
            {link.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
