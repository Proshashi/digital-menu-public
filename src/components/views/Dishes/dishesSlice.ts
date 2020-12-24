import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemTypes } from "../../../types";

const initialState = {
  loading: false,
  error: {
    state: false,
    msg: "",
  },
  data: [],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<{ loading: boolean }>) => {
      state.loading = payload.loading;
    },
    setError: (
      state,
      { payload }: PayloadAction<{ error: { msg: string; state: boolean } }>
    ) => {
      state.error.msg = payload.error.msg;
      state.error.state = payload.error.state;
      state.loading = false;
    },
    setData: (state, { payload }: PayloadAction<[]>) => {
      state.data = payload;
    },
  },
});

export const { setData, setError, setLoading } = dishesSlice.actions;

export default dishesSlice.reducer;
