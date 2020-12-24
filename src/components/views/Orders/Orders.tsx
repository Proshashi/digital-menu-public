import React from "react";
import { Tabs } from "antd";
import { FaCartArrowDown } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import CartOrders from "./CartOrders/CartOrders";
import PendingOrders from "./PendingOrders/PendingOrders";
import ReceivedOrders from "./ReceivedOrders/ReceivedOrders";

const { TabPane } = Tabs;

interface Props {}

const Orders = (props: Props) => {
  return (
    <div className="__cus_orders">
      <Tabs
        defaultActiveKey="1"
        centered
        size="large"
        className="__cus_orders-tabs"
        tabBarStyle={{ color: "#64cd72" }}
      >
        <TabPane
          tab={
            <div className="__cus_orders-tabs--tab">
              <FaCartArrowDown className="__cus_orders-tabs--tab__icon" /> Cart
            </div>
          }
          key="1"
        >
          <CartOrders />
        </TabPane>
        <TabPane
          tab={
            <div className="__cus_orders-tabs--tab">
              <BsArrowRepeat className="__cus_orders-tabs--tab__icon" /> Pending
            </div>
          }
          key="2"
        >
          <PendingOrders />
        </TabPane>
        <TabPane
          tab={
            <div className="__cus_orders-tabs--tab">
              <AiOutlineCheck className="__cus_orders-tabs--tab__icon" />{" "}
              Received
            </div>
          }
          key="3"
        >
          <ReceivedOrders />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Orders;
