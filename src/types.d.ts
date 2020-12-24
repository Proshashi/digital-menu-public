import { ImgHTMLAttributes } from "react";
import { FirebaseReducer } from "react-redux-firebase";
import { tabsTypes } from "components/includes/Tabs/tabsSlice";
import rootReducer from "app/store/rootReducer";
import store from "app/store";
import { Action, ThunkAction } from "@reduxjs/toolkit";

export type storeTypes = ReturnType<typeof store.getState>;

export interface itemTypes {
  id?: string;
  available?: boolean;
  description?: string;
  image?: {
    _128x128: string;
  };
  meta?: {
    category: string;
    type: string[];
  };
  name?: string;
  price?: number;
  quantity?: number;
  showOnCarousel?: boolean;
}

export interface orderTypes {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: {
    _128x128: string;
  };
  total: number;
  readyToDeliver: boolean;
  delivered: boolean;
  sentToWaiter: boolean;
}

export {};
