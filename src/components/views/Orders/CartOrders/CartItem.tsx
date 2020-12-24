import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  name: string;
  price: number;
  quantity: number;
  image: string;
  handleCounter: Function;
  handleItemDelete: Function;
}

const CartItem: React.FC<Props> = ({
  name,
  price,
  quantity,
  image,
  handleCounter,
  handleItemDelete,
}) => {
  return (
    <div className="__cus_orders-cart--item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="detail">
        <div className="top">
          <div className="name">{name}</div>
          <div className="remove">
            <AiFillDelete onClick={() => handleItemDelete()} />
          </div>
        </div>
        <div className="bottom">
          <div className="price">
            <div className="label">Price</div>
            <div className="amount">{`${quantity} * ${price} = Rs. ${
              quantity * price
            }`}</div>
          </div>
          <div className="quantity">
            <div className="subtract" onClick={() => handleCounter(-1)}>
              -
            </div>
            <div className="number">{quantity}</div>
            <div className="add" onClick={() => handleCounter(1)}>
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
