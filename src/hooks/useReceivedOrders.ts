import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";

import firebase from "app/config/fbConfig";

export interface receivedTypes {
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
  recievedTime: Date;
}

export const useReceivedOrders = (
  tableId: string
): [receivedTypes[] | undefined, boolean, undefined | Error] => {
  const [values, loading, error] = useDocument(
    firebase.firestore().doc(`tables/${tableId}`)
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    if (values && values.data()) {
      setData(values.data()?.recieved);
    }
  }, [values]);

  return [data, loading, error];
};
