import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import firebase from "../app/config/fbConfig";

const getSimplifiedData = (value: any) => {
  let data: any = [];
  value.forEach((doc: any) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return data;
};

export const useFetchFromDb = <T>(
  collection: any
): [T | undefined, boolean, undefined | Error] => {
  const [data, setData] = useState();
  const [values, loading, error] = useCollection(collection);

  useEffect(() => {
    if (values) {
      setData(getSimplifiedData(values));
    }
  }, [values]);

  return [data, loading, error];
};

const getSimplifiedDocData = (value: any) => {
  const data = value.data();
  return {
    ...data,
    id: value.id,
  };
};

export const useFetchDocFromDb = <T>(
  collection: string,
  doc: string
): [T | undefined, boolean, undefined | Error] => {
  const [data, setData] = useState();
  const [value, loading, error] = useDocument(
    firebase.firestore().doc(`${collection}/${doc}`)
  );

  useEffect(() => {
    if (value && value.data()) {
      setData(getSimplifiedDocData(value));
    }
  }, [value]);

  return [data, loading, error];
};
