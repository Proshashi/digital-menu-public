import React, { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

const OrdersLayout: React.FC<Props> = ({ children }) => {
  return <div className="__cus_orders-layout">{children}</div>;
};

export default OrdersLayout;
