import React, { Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import BottomNav from "./navigations/BottomNav/BottomNav";

import "antd/dist/antd.css";
import history from "utils/history";
import { Waiter } from "./views/Waiter/Waiter";

const Home = lazy(() => import("./views/Home/Home"));
const Orders = lazy(() => import("./views/Orders/Orders"));
const Dishes = lazy(() => import("./views/Dishes/Dishes"));
const Beverages = lazy(() => import("./views/Beverages/Beverages"));
const ItemDescription = lazy(
  () => import("./includes/views/ItemDescription/ItemDescription")
);

const App: React.FC = () => {
  return (
    <div className="__cus">
      <Router history={history}>
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ClipLoader size={100} color={"#ccc"} loading={true} />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orders" component={Orders} />
            <Route exact path="/dishes" component={Dishes} />
            <Route path="/dishes/:id" component={ItemDescription} />
            <Route path="/beverages/:id" component={ItemDescription} />
            <Route path="/beverages" component={Beverages} />
            <Route path="/waiter" component={Waiter} />
          </Switch>
        </Suspense>

        <BottomNav />
      </Router>
    </div>
  );
};

export default App;
