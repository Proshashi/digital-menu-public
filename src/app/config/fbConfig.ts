import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env["apiKey"],
  authDomain: process.env["authDomain"],
  databaseURL: process.env["databaseURL"],
  projectId: process.env["projectId"],
  storageBucket: process.env["storageBucket"],
  messagingSenderId: process.env["messageSendingId"],
  appId: process.env["appId"],
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const items = db.collection("items");
export const tables = db.collection("tables");
export const notifications = db.collection("notifications");

export default firebase;
