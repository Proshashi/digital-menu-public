import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";

import firebase from "app/config/fbConfig";
import { orderTypes } from "types";

export interface pendingType {
  _id: string;
  date: Date;
  deliveredAllItems: boolean;
  forTable: string;
  items: orderTypes[];
  total?: number;
}

export const usePendingOrders = (
  tableId: string
): [pendingType[] | undefined, boolean, undefined | Error] => {
  const [values, loading, error] = useDocument(
    firebase.firestore().doc(`tables/${tableId}`)
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    if (values && values.data()) {
      setData(values.data()?.pending);
    }
  }, [values]);

  return [data, loading, error];
};
