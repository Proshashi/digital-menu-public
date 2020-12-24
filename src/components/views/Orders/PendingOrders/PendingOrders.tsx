import PendingSkeleton from "components/includes/Skeletons/PendingSkeleton";
import Text from "components/includes/Text/Text";
import { pendingType, usePendingOrders } from "hooks/usePendingOrders";
import React from "react";
import OrdersLayout from "../OrdersLayout";
import PendingItem from "./PendingItem";

interface Props {}

const RenderPendingOrders: React.FC<{ data: pendingType[] | undefined }> = ({
  data,
}) => {
  return (
    <>
      {data &&
        data[0] &&
        data.map((d) => {
          return (
            <div key={d._id}>
              <PendingItem pendingData={d} />
            </div>
          );
        })}
    </>
  );
};

const PendingOrders: React.FC<Props> = (props) => {
  // eslint-disable-next-line
  const [data, loading, error] = usePendingOrders("XlSgOgkefbrYzqjFJaFO");

  if (loading) {
    return (
      <OrdersLayout>
        <PendingSkeleton />
      </OrdersLayout>
    );
  }

  if ((data && !data[0]) || !data) {
    return (
      <OrdersLayout>
        <Text align="center" weight="bold" size="small" color="#484545">
          No pending items
        </Text>
      </OrdersLayout>
    );
  }

  return (
    <OrdersLayout>
      <div className="__cus_orders-pending">
        <RenderPendingOrders data={data} />
      </div>
    </OrdersLayout>
  );
};

export default PendingOrders;
