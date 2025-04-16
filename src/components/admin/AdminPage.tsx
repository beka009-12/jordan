import { FC, useEffect, useState } from "react";
import scss from "./AdminPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { setData } from "../../store/slice/SliceData";
import { useAppDispatch, useAppSelectore } from "../../store/Store";

interface IForm {
  brand: string;
  name: string;
  price: number;
  img: string;
  category: string;
  air: string;
}

const API = import.meta.env.VITE_ID;

const AdminPage: FC = () => {
  const { register, handleSubmit, reset, setValue } = useForm<IForm>();
  const { data } = useAppSelectore((s) => s.data);
  const dispatch = useAppDispatch();

  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchData = async () => {
    let { data } = await axios.get(API);
    dispatch(setData(data.data));
  };

  const submitForm: SubmitHandler<IForm> = async (data) => {
    const newObj = {
      name: data.name,
      price: data.price,
      category: data.category,
      img: data.img,
      brand: data.brand,
      air: data.air,
    };

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, newObj);
        setEditingId(null);
      } else {
        await axios.post(API, newObj);
      }
      reset();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id: number) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  const handleEdit = (item: any) => {
    setEditingId(item._id);
    setValue("name", item.name);
    setValue("price", item.price);
    setValue("category", item.category);
    setValue("img", item.img);
    setValue("brand", item.brand);
    setValue("air", item.air);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className={scss.AdminPage}>
        <div className="container">
          <div className={scss.content}>
            <form
              onSubmit={handleSubmit(submitForm)}
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
                <select
                  {...register("category", { required: true })}
                  className={scss.select}
                >
                  <option value="">Select category</option>
                  <option value="Air Max Dn8">Air Max Dn8</option>
                  <option value="Air Max Dn">Air Max Dn</option>
                  <option value="Air Max 1">Air Max 1</option>
                  <option value="Air Max 90">Air Max 90</option>
                  <option value="Air Max 95">Air Max 95</option>
                </select>
              </div>
              <div className={scss.input}>
                <label className={scss.label}>Product Brand</label>
                <input
                  {...register("brand", { required: true })}
                  type="text"
                  placeholder="Product Brand"
                />
              </div>
              <div className={scss.input}>
                <label className={scss.label}>New Product</label>
                <input
                  {...register("air")}
                  type="text"
                  placeholder="New Product"
                />
              </div>

              <button type="submit">{editingId ? "Update" : "Add"}</button>
            </form>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={scss.box}>
          {data.map((item, index) => (
            <div key={index} className={scss.cart}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <span>{item.category}</span>
              <p>${item.price}</p>
              <div className={scss.actions}>
                <button onClick={() => handleEdit(item)}>Update</button>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
