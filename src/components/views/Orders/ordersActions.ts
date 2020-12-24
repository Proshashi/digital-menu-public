import { Dispatch } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import firebase, { tables } from "app/config/fbConfig";
import { orderTypes } from "types";
import { deleteOrder, setOrderError, setOrderLoading } from "./ordersSlice";
import { notification } from "antd";

export const addOrder = (tableId: string, orders: orderTypes[]) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(setOrderLoading(true));
    let totals = 0;
    // eslint-disable-next-line
    orders.map((order) => {
      totals += order.total;
    });
    const ordersToPlace = {
      _id: uuidv4(),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      deliveredAllItems: false,
      forTable: tableId,
      items: orders,
      total: totals,
      sentToKitchen: false,
    };

    await tables.doc(tableId).update({
      pending: firebase.firestore.FieldValue.arrayUnion(ordersToPlace),
    });

    // eslint-disable-next-line
    orders.map((order) => {
      dispatch(deleteOrder({ id: order._id }));
    });
    dispatch(setOrderLoading(false));
  } catch (err) {
    console.log(err);
    setOrderError(err.message);
    notification.error({ message: err.message, duration: 500 });
  }
};

export const getPendingOrders = (tableId: string) => async (
  dispatch: Dispatch
) => {};
