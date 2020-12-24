import { firebaseReducer } from "react-redux-firebase";
import tabsReducer from "components/includes/Tabs/tabsSlice";
import ordersReducer from "components/views/Orders/ordersSlice";

export const rootReducer = {
  firebase: firebaseReducer,
  tabs: tabsReducer,
  orders: ordersReducer,
};

export default rootReducer;
