import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderTypes } from "types";
import { notification } from "antd";
import history from "utils/history";

export interface orderStateType {
  loading: boolean;
  error: Error | undefined;
  tableId: string | undefined;
  orders: orderTypes[];
}

const initialState: orderStateType = {
  loading: false,
  error: undefined as Error | undefined,
  tableId: undefined,
  orders: [],
};

const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState,
  reducers: {
    setOrderLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setOrderError: (state, { payload }: PayloadAction<Error | undefined>) => {
      state.error = payload;
      state.loading = false;
    },
    setOrders: (
      state,
      {
        payload,
      }: PayloadAction<{
        tableId: string | undefined;
        orders: orderTypes;
      }>
    ) => {
      state.tableId = payload.tableId;
      const foundOrders = state.orders.find(
        (item) => item._id === payload.orders._id
      );
      if (foundOrders) {
        const totalQuantity = foundOrders.quantity + payload.orders.quantity;
        foundOrders.quantity = totalQuantity;
        foundOrders.total = totalQuantity * foundOrders.price;
      } else {
        state.orders.push(payload.orders);
      }

      notification.success({
        message: "Added to cart succesfully",
        duration: 1.5,
        onClick: () => {
          history.push("/orders");
          notification.destroy();
        },
      });
    },
    deleteOrder: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.orders.findIndex((order) => order._id === payload.id);
      state.orders.splice(index, 1);
    },
    toggleQuantity: (
      state,
      { payload }: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const quantityToToggle = state.orders.find(
        (order) => order._id === payload.id
      );
      if (quantityToToggle) {
        if (payload.quantity < 0 && quantityToToggle?.quantity < 2) {
          return;
        } else {
          quantityToToggle.quantity += payload.quantity;
          quantityToToggle.total =
            quantityToToggle.quantity * quantityToToggle.price;
        }
      }
    },
  },
});

export const {
  setOrderError,
  setOrderLoading,
  setOrders,
  toggleQuantity,
  deleteOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;
