import { FC, useEffect } from "react";
import scss from "./AdminPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { setData } from "../../store/slice/SliceData";

interface IForm {
  brand: string;
  name: string;
  price: number;
  img: string;
  category: string;
}

const API = import.meta.env.VITE_ID;

const AdminPage: FC = () => {
  const { register, handleSubmit, reset } = useForm<IForm>();

  const createProduct: SubmitHandler<IForm> = async (data) => {
    const newObj = {
      name: data.name,
      price: data.price,
      category: data.category,
      img: data.img,
      brand: data.brand,
    };
    try {
      await axios.post(API, newObj);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData;
  }, []);

  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}>
          <form
            onSubmit={handleSubmit(createProduct)}
            className={scss.input_group}
          >
            <div className={scss.input}>
              <label className={scss.label}>Product Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className={scss.input}>
              <label className={scss.label}>Product Price</label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Product Price"
              />
            </div>
            <div className={scss.input}>
              <label className={scss.label}>Product Image</label>
              <input
                {...register("img", { required: true })}
                type="text"
                placeholder="Product Image"
              />
            </div>
            <div className={scss.input}>
              <label className={scss.label}>Product Category</label>
              <input
                {...register("category", { required: true })}
                type="text"
                placeholder="Product Category"
              />
            </div>
            <div className={scss.input}>
              <label className={scss.label}>Product Brand</label>
              <input
                {...register("brand", { required: true })}
                type="text"
                placeholder="Product Brand"
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
