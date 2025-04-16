import { FC, useEffect, useState } from "react";
import scss from "./Brands.module.scss";
import { useAppDispatch, useAppSelectore } from "../../store/Store";
import axios from "axios";
import { setData } from "../../store/slice/SliceData";
import Pagination from "@mui/material/Pagination";

const API = import.meta.env.VITE_ID;

const categories = [
  "Air Max Dn8",
  "Air Max Dn",
  "Air Max 1",
  "Air Max 90",
  "Air Max 95",
  "Air Max 97",
  "Air Max 270",
  "Air Max Plus",
  "Vapor Max",
];

const Brands: FC = () => {
  const { data } = useAppSelectore((s) => s.data);
  const dispatch = useAppDispatch();

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const fetchData = async () => {
    let { data } = await axios.get(API);
    dispatch(setData(data.data));
  };

  const filteredData = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  const count = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageData = () => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  };

  const handlerPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id={scss.aaaa}>
      <section id={scss.main}>
        <div className="container">
          <div className={scss.main}>
            <div className={scss.div}>
              <div className={scss.quantity}>
                <h3>Shoues</h3>
                <p>/</p>
                <h3>Air Max</h3>
                <p>/</p>
                <h3>Air Max Dn</h3>
              </div>
              <h2>Air Max Dn ({filteredData.length})</h2>
            </div>
            <div className={scss.select}>
              <div
                className={scss.show}
                style={{ cursor: "pointer" }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <h3>Show</h3>
              </div>
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
      </section>

      <section className={scss.Brands}>
        <div className="container">
          <div className={scss.content}>
            {!isExpanded && (
              <div className={scss.text}>
                {categories.map((item, index) => (
                  <h2
                    key={index}
                    onClick={() => {
                      setSelectedCategory(item);
                      setPage(1);
                    }}
                    style={{
                      cursor: "pointer",
                      color: selectedCategory === item ? "#007bff" : "inherit",
                      textDecoration:
                        selectedCategory === item ? "underline" : "none",
                    }}
                  >
                    {item}
                  </h2>
                ))}
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    style={{
                      marginTop: "10px",
                      cursor: "pointer",
                      background: "#000",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    Show All
                  </button>
                )}
              </div>
            )}

            <div className={`${scss.box} ${isExpanded ? scss.expanded : ""}`}>
              {handlePageData().map((item, index) => (
                <div key={index} className={scss.cart}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <span>{item.category}</span>
                  <p>${item.price}</p>
                </div>
              ))}
              <div className={scss.pagi}>
                <Pagination
                  color="primary"
                  count={count}
                  page={page}
                  onChange={handlerPage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
