// "use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CardItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
}
export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as CardItem[],
  reducers: {
    AddCard: (state, action: PayloadAction<CardItem>) => {
      state.push(action.payload);
    },
    RemoveCard: (state, action: PayloadAction<number>) => {
      return state.filter((remove) => {
        return remove.id !== action.payload;
      });
    },
  },
});
export const { AddCard, RemoveCard } = counterSlice.actions;
export default counterSlice.reducer;
