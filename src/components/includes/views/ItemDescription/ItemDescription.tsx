import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

import { useFetchDocFromDb } from "hooks/firebaseHooks";
import { itemTypes, orderTypes } from "types";
import { GoBack } from "components/includes/GoBack/GoBack";
import ItemDescriptionSkeleton from "components/includes/Skeletons/ItemDescriptionSkeleton";
import { useDispatch } from "react-redux";
import { setOrders } from "components/views/Orders/ordersSlice";

interface Props {
  id: string;
}

const ItemDescription = ({ match }: RouteComponentProps<Props>) => {
  const itemId = match.params.id;
  // eslint-disable-next-line
  const [data, loading, error] = useFetchDocFromDb<itemTypes>("items", itemId);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (loading) {
    return <ItemDescriptionSkeleton />;
  }

  const handleClick = () => {
    const { id, image, name, price } = data!;

    const order: orderTypes = {
      _id: id!,
      name: name!,
      price: price!,
      quantity,
      image: {
        _128x128: image?._128x128!,
      },
      total: price! * quantity,
      readyToDeliver: false,
      delivered: false,
      sentToWaiter: false,
    };

    dispatch(setOrders({ orders: order, tableId: "XlSgOgkefbrYzqjFJaFO" }));
  };

  return (
    <div className="__cus_itemDesc">
      <div>
        <GoBack
          style={{
            backgroundColor: "#00000048",
            color: "#fff",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
        <div className="__cus_itemDesc-image">
          <img src={data?.image?._128x128} alt={data?.name} />
        </div>
        <div className="__cus_itemDesc-title">{data?.name}</div>
        <div
          className="__cus_itemDesc-description"
          dangerouslySetInnerHTML={{ __html: data?.description! }}
        />
      </div>
      <div>
        <div className="__cus_itemDesc-quantity">
          <div className="__cus_itemDesc-quantity--buttons">
            <div
              className="subtract"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </div>
            <div className="number">{quantity}</div>
            <div className="add" onClick={() => setQuantity(quantity + 1)}>
              +
            </div>
          </div>
          <div className="__cus_itemDesc-quantity--price">
            Rs. {quantity * data?.price!}
          </div>
        </div>
        <div className="__cus_itemDesc-cartButton" onClick={handleClick}>
          <FaCartArrowDown style={{ margin: "0 1rem" }} />
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
