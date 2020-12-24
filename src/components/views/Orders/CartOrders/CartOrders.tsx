import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import { orderTypes, storeTypes } from "types";
import { addOrder } from "../ordersActions";
import OrdersLayout from "../OrdersLayout";
import { deleteOrder, toggleQuantity } from "../ordersSlice";
import CartItem from "./CartItem";

interface Props {}

const RenderCartOrders: React.FC<{ orders: orderTypes[] }> = ({ orders }) => {
  const dispatch = useDispatch();
  return (
    <>
      {orders.map(({ image, name, price, quantity, _id }) => {
        return (
          <div key={_id}>
            <CartItem
              key={_id}
              image={image._128x128}
              price={price}
              name={name}
              quantity={quantity}
              handleCounter={(c: number) => {
                dispatch(toggleQuantity({ id: _id, quantity: c }));
              }}
              handleItemDelete={() => {
                dispatch(deleteOrder({ id: _id }));
              }}
            />
          </div>
        );
      })}
    </>
  );
};

const CartOrders: React.FC<Props> = (props) => {
  const { orders, loading } = useSelector((state: storeTypes) => state.orders);
  const dispatch = useDispatch();

  const TABLE_ID = "XlSgOgkefbrYzqjFJaFO";

  const handleClick = () => {
    dispatch(addOrder(TABLE_ID, orders));
  };

  if (!orders[0]) {
    return (
      <OrdersLayout>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.6rem",
            color: "#484545",
          }}
        >
          Please add some items
        </div>
      </OrdersLayout>
    );
  }

  return (
    <OrdersLayout>
      <div className="__cus_orders-cart">
        <RenderCartOrders orders={orders} />
        <Button
          type="primary"
          className="__cus_orders-cart--button"
          onClick={handleClick}
          title="Place Order"
          loading={loading}
        >
          Place Order
        </Button>
      </div>
    </OrdersLayout>
  );
};

export default CartOrders;
