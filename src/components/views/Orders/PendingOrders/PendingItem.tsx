import { pendingType } from "hooks/usePendingOrders";
import React from "react";
import { orderTypes } from "types";
import getFormattedDate from "utils/getFormattedDate";

interface Props {
  pendingData: pendingType;
}

const RenderItem: React.FC<{ item: orderTypes }> = ({ item }) => {
  const { _id, image, price, quantity, total, name } = item;
  return (
    <div className="item" key={_id}>
      <div className="image">
        <img src={image._128x128} alt="" />
      </div>
      <div className="details">
        <div className="name">{name}</div>
        <div className="price">
          {price} * {quantity} = Rs. {total}
        </div>
      </div>
    </div>
  );
};

const PendingItem: React.FC<Props> = ({ pendingData }) => {
  const { date, total, items } = pendingData;

  return (
    <div className="__cus_orders-pending--item">
      <div className="__cus_orders-pending--item__time">
        {getFormattedDate(date)}
      </div>
      <div className="__cus_orders-pending--item__detail">
        <div className="items">
          {items.map((item) => (
            <RenderItem item={item} key={item._id} />
          ))}
        </div>
        <div className="total">
          <span className="label">Rs. </span>
          <span className="number">{total}</span>
        </div>
      </div>
    </div>
  );
};

export default PendingItem;
