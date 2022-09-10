import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IItem, IItemCreatePayload, IItemUpdatePayload } from "../../model";
import {
  createItem,
  deleteItem,
  fetchItems,
  updateItem,
  // updateItem,
  // deleteItem,
} from "../../api/items";

import { RootState } from "../../app/store";

export interface IItemState {
  allItems: Array<IItem>;
}

const initialState: IItemState = {
  allItems: [],
};

export const getItemsAsync = createAsyncThunk(
  "api/Storage/fetchItems",
  async () => await fetchItems()
);

export const createItemAsync = createAsyncThunk(
  "api/Storage/createItem",
  async (item: IItemCreatePayload) => await createItem(item)
);

export const deleteItemAsync = createAsyncThunk(
  "api/Storage/deleteItem",
  async (id: string) => await deleteItem(id)
);

export const updateItemAsync = createAsyncThunk(
  "api/Storage/updateItem",
  async (item: IItemUpdatePayload) => await updateItem(item)
);

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IItem>) => {
      state.allItems = [...state.allItems, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.allItems = state.allItems.filter((i) => i.id !== action.payload);
    },
    changeItem: (state, action: PayloadAction<IItem>) => {
      state.allItems = state.allItems.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getItemsAsync.fulfilled, (state, action) => {
        state.allItems = action.payload;
      })
      .addCase(createItemAsync.fulfilled, (state, action) => {
        itemSlice.caseReducers.addItem(state, action);
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        itemSlice.caseReducers.removeItem(state, action);
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        itemSlice.caseReducers.changeItem(state, action);
      });
  },
});

export const { addItem, removeItem, changeItem } = itemSlice.actions;

export const selectAllItems = (state: RootState): Array<IItem> =>
  state.items.allItems;

export default itemSlice.reducer;
