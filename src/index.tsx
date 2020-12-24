import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import App from "./components/App";
import store from "./app/store";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
