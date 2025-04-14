import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IType {
  _id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  details: string;
}

interface IData {
  data: IType[];
  filter: string;
}

const initialState: IData = {
  data: [],
  filter: "all",
};

const dataSlice = createSlice({
  name: "aaa",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IType[]>) => {
      state.data = action.payload;
    },
    setAddData: (state, action: PayloadAction<IType>) => {
      state.data.push(action.payload);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload; // Обновление состояния фильтра
    },
  },
});

export const { setData, setAddData, setFilter } = dataSlice.actions;
export default dataSlice.reducer;
