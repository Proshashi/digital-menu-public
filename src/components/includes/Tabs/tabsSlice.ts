import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface tabsTypes {
  dishesIndex: number | undefined;
  beveragesIndex: number | undefined;
}

type itemTypes = "dishesIndex" | "beveragesIndex";

const initialState = {
  dishesIndex: undefined as number | undefined,
  beveragesIndex: undefined as number | undefined,
};

const tabsSlice = createSlice({
  name: "tabsSlice",
  initialState,
  reducers: {
    setIndex: (
      state: tabsTypes,
      { payload }: PayloadAction<{ type: itemTypes; index: number | undefined }>
    ) => {
      state[payload.type] = payload.index;
    },
  },
});

export default tabsSlice.reducer;
export const { setIndex } = tabsSlice.actions;
