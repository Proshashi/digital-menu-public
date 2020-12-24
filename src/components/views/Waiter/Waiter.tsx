import Box from "components/includes/Box/Box";
import Text from "components/includes/Text/Text";
import React from "react";
import CallWaiterWithMessage from "./CallWaiterWithMessage";
import { WaiterBell } from "./Icons";

interface Props {}

export const Waiter: React.FC<Props> = (props) => {
  return (
    <Box padding="20px 0 0 20px">
      <Text size="xLarge" family="Roboto-Slab" weight="bold">
        Table: 1
      </Text>
      <Box
        row
        width="80vw"
        align="center"
        justify="center"
        background="#C24444"
        margin="20px auto"
        padding="10px"
        rounded="10px"
        shadow="medium"
      >
        <Text
          color="#fff"
          size="medium"
          weight="bold"
          family="Roboto-Slab"
          margin="0 20px 0 0"
        >
          Call waiter
        </Text>
        <WaiterBell />
      </Box>
      <CallWaiterWithMessage />
    </Box>
  );
};
