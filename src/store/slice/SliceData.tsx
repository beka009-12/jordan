import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IType {
  _id: number;
  name: string;
  price: number;
  category: string;
  img: string;
  details: string;
  air: string;
}

interface IData {
  data: IType[];
}

const initialState: IData = {
  data: [],
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
  },
});

export const { setData, setAddData } = dataSlice.actions;
export default dataSlice.reducer;
