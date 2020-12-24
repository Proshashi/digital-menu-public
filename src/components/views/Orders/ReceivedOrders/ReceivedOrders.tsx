import React from "react";

import { receivedTypes, useReceivedOrders } from "hooks/useReceivedOrders";
import OrdersLayout from "../OrdersLayout";
import ReceivedItem from "./ReceivedItem";
import PendingSkeleton from "components/includes/Skeletons/PendingSkeleton";
import Box from "components/includes/Box/Box";
import Text from "components/includes/Text/Text";
import BillIcon from "components/includes/icons/BillIcon";

interface Props {}

const RenderReceivedOrders: React.FC<{ data?: receivedTypes[] }> = ({
  data,
}) => {
  return (
    <>
      {data &&
        data[0] &&
        data.map((d) => (
          <div key={d._id + d.recievedTime}>
            <ReceivedItem receivedData={d} />
          </div>
        ))}
    </>
  );
};

const RenderTotal: React.FC<{ data?: receivedTypes[] }> = ({ data }) => {
  let grandTotal: number = 0;
  data && data.forEach((d) => (grandTotal += Number(d.total)));

  return (
    <Box row align="center" justify="space-between" padding="0 20px" _wrap>
      <Box
        padding="10px"
        rounded="5px"
        shadow="medium"
        background="#fff"
        margin="5px 0"
      >
        <Text align="center" size="small" family="Roboto-Slab" color="#3D4777">
          Total: Rs. {grandTotal!} /-
        </Text>
      </Box>
      <Box
        padding="10px"
        rounded="5px"
        shadow="medium"
        width="45vw"
        background="#3D4777"
        row
        align="center"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <BillIcon color="#fff" />
        <Text
          align="center"
          size="small"
          family="Roboto-Slab"
          color="#fff"
          inline
          margin="0 0 0 5px"
        >
          Order Bill
        </Text>
      </Box>
    </Box>
  );
};

const ReceivedOrders = (props: Props) => {
  // eslint-disable-next-line
  const [data, loading, error] = useReceivedOrders("XlSgOgkefbrYzqjFJaFO");

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
          No recieved items
        </Text>
      </OrdersLayout>
    );
  }

  return (
    <OrdersLayout>
      <div>
        <RenderReceivedOrders data={data} />
        <RenderTotal data={data} />
      </div>
    </OrdersLayout>
  );
};

export default ReceivedOrders;
