import { FC, useEffect } from "react";
import scss from "./NewPage.module.scss";
import { useAppDispatch, useAppSelectore } from "../../store/Store";
import axios from "axios";
import { setData } from "../../store/slice/SliceData";

const api = import.meta.env.VITE_ID;
const NewPage: FC = () => {
  const { data } = useAppSelectore((s) => s.data);
  const dis = useAppDispatch();

  const fetchData = async () => {
    const { data } = await axios.get(api);
    dis(setData(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className={scss.img}></div>
      </div>
      <section className={scss.NewPage}>
        <div className="container">
          <div className={scss.scrollContainer}>
            <div className={scss.content}>
              {data.map((item, index) => (
                <div key={index} className={scss.card}>
                  <img src={item.air} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewPage;
