import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import data from "./slice/SliceData";

export const store = configureStore({
  reducer: {
    data,
  },
});

export const useAppSelectore: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
